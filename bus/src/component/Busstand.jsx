import React,{useEffect,useState} from 'react';
import axios from "axios";

const Busstand=()=>{
    const [sdata,setdata]=useState([]);
    const [text,settext]=useState("");
    const [result,setSearchResult]=useState(null);
    // useEffect(()=>{
    //     fetch(`http://127.0.0.1:8000/routes/bus_stand/?format=json`)
    //     .then((res)=>{setdata(res.data)})
    // },[data])
    useEffect(()=>{
        async function getallbus(){
            try{
                const bus=await axios.get("http://127.0.0.1:8000/routes/bus_stand/?format=json")
                console.log(bus.data);
                setdata(bus.data);
            }
            catch(error){
                console.log("error ");
            }
        }
        getallbus()
    },[]);
    const handleSearch = () => {
        // Filter the data to find the matching bus stand based on the searchName.
        const result = sdata.find((busstand) => busstand.Name === text);
    
        if (result) {
          setSearchResult(result.code);
        } else {
          setSearchResult('Not found');
        }
        window.alert("your code is "+ result.code);
      };
    
    return(
        <>
        <input
                type="text"
                placeholder="Search..."
                className="p-2 border rounded"
                onChange={(e)=>{settext(e.target.value)}}
             />
             <button className="bg-slate-400" onClick={handleSearch}>GET CODE </button>
        <div className=" flex flex-col container h-screen bg-gray-100 p-4">
  <h1 className="text-center text-4xl font-bold mb-4">BUSSTAND</h1>
  <div className="overflow-auto">
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">Code</th>
          <th className="border px-4 py-2">Name</th>
        </tr>
      </thead>
      <tbody>
        {sdata.map((busstand, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{busstand.code}</td>
            <td className="border px-4 py-2">{busstand.Name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </>
    )

}
export default Busstand;
