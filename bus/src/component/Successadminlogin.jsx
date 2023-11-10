import React,{useEffect,useState} from 'react';
import axios from "axios";

const Successadminlogin=()=>{
    const [sdata,setdata]=useState([]);
    const [dat,sdat]=useState([]);
    const [text1,settext1]=useState("");
    const [text2,settext2]=useState("");
    const [resultc,setresultc]=useState([])
    const [resultd,setresultd]=useState([])
    // useEffect(()=>{
    //     fetch(`http://127.0.0.1:8000/routes/bus_stand/?format=json`)
    //     .then((res)=>{setdata(res.data)})
    // },[data])
    useEffect(()=>{
        async function getallcon(){
            try{
                const con=await axios.get("http://127.0.0.1:8000/routes/conductor/?format=json")
                console.log(con.data);
                setdata(con.data);
            }
            catch(error){
                console.log("error ");
            }
        }
        getallcon()
    },[]);
    useEffect(()=>{
        async function getalldri(){
            try{
                const dri=await axios.get("http://127.0.0.1:8000/routes/driver/?format=json")
                console.log(dri.data);
                sdat(dri.data);
            }
            catch(error){
                console.log("error ");
            }
        }
        getalldri()
    },[]);
    const result1=sdata.filter((con)=>
        con.C_name.toLowerCase().includes(text1.toLowerCase())
    )
    const result2=dat.filter((con)=>
        con.D_name.toLowerCase().includes(text2.toLowerCase())
    )
    //  const combinedArray = [];

    //     for (let i = 0; i < Math.max(sdata.length, dat.length); i++) {
    //         if (i < sdata.length) {
    //         combinedArray.push(sdata[i]);
    //         }
    //         if (i < dat.length) {
    //         combinedArray.push(dat[i]);
    //         }
    //     }

    const handleSearch1 = () => {
        // Filter the data to find the matching bus stand based on the searchName.
        const result1 = sdata.find((busstand) => busstand.C_id === text1);
      };
      const handleSearch2 = () => {
        // Filter the data to find the matching bus stand based on the searchName.
        const result2 = sdata.find((busstand) => busstand.D_id === text2);
      };
    return(
        <>
        <input
                type="text"
                placeholder="Search..."
                className="p-2 border rounded ml-20 mt-2"
                onChange={(e)=>settext1(e.target.value)}
             />
             <button className="bg-slate-400" onClick={handleSearch1}> SEARCH CONDUCTOR </button>
             <input
                type="text"
                placeholder="Search..."
                className="p-2 border rounded ml-64 mt-2"
                onChange={(e)=>settext2(e.target.value)}
             />
             <button className="bg-slate-400" onClick={handleSearch2}> SEARCH DRIVER  </button>
        <div className=" flex flex-col container h-screen bg-gray-100 p-4 mt-4">
  <h1 className="text-center text-4xl font-bold mb-4">BUSSTAND</h1>
  <div className="overflow-auto">
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">Code</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Salary</th>
          <th className="border px-4 py-2">Workingshift</th>
        </tr>
      </thead>
      <tbody>
        {result1.map((busstand, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{busstand.C_id}</td>
            <td className="border px-4 py-2">{busstand.C_name}</td>
            <td className="border px-4 py-2">{busstand.salary}</td>
            <td className="border px-4 py-2">{busstand.working_shift}</td>
          </tr>
        ))}
        {result2.map((busstand, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{busstand.D_id}</td>
            <td className="border px-4 py-2">{busstand.D_name}</td>
            <td className="border px-4 py-2">{busstand.salary}</td>
            <td className="border px-4 py-2">{busstand.working_shift}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </>
    )

}
export default Successadminlogin;