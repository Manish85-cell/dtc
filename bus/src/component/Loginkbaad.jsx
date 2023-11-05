import React,{useState,useEffect} from 'react';
import usebusinfo from '../assets/Api';
import axios from "axios";
const Loginkbaad=()=>{
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [dat,setdat]=useState([]);
    const [sub,setsub]=useState(0);
    const [result,setSearchResult]=useState([]);
    const [bus,setBus]=useState(null);
    const b=usebusinfo();
    useEffect(()=>{
        async function getbus(){
            try{
                const bus=await axios.get("http://127.0.0.1:8000/routes/bus/?format=json")
                setdat(bus.data);
                console.log(dat);

            }
            catch(error){
                console.log("error");
            }
        }
        getbus()
    },[]);
    const handleSearch1=()=>{
         //console.log(`${from} to $ ${to}`);
         const d = dat.find((e) => e.route.some((stop) => stop === from  ));
         const e = dat.find((e) => e.route.some((stop) => stop === to  ));
         if(d.bus_code===e.bus_code){
            setBus(d.bus_code);
         }
         else{
            setBus(null);
         }
         
    }
    const handleSearch = () => {
        // You can implement your search logic here
        const num=parseInt(sub);
      const c= dat.find((e)=>e.bus_code===num);
      if (c) {
        setSearchResult(c.route);
      } else {
        setSearchResult(null);
      }
    }
    return(
        <>
        <div className="h-screen bg-slate-300">
            <div className="text-black/120 mb-2 inline-block bg-black text-2xl text-white
            w-full text-center ml-2 mr-2">
                Find your bus in delhi 
            </div>
            <div className="bg-gray-200 p-4">
        <div className="flex items-center space-x-4">
                {/* <input
                type="text"
                placeholder="From"
                className="p-2 border rounded w-1/2"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                /> */}
                <select
                    className="p-2 border rounded w-1/2"             
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                >
                {
                            b.map((buss,index)=>{
                                return(
                                    <option key={index} value={buss.Name}>
                            {buss.Name} {buss.code}
                            </option>
                                )
                            })
                }
                
                </select>
                <select
                    className="p-2 border rounded w-1/2"             
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                >
                {
                            b.map((buss,index)=>{
                                return(
                                    <option key={index} value={buss.Name}>
                            {buss.Name}  {buss.code}
                            </option>
                                )
                            })
                }
                
                </select>
            <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSearch1}
            >
            Search
            </button>
            <br/>
            
         </div>
         <h3 className="text-center text-1xl ">OR</h3>
         <div className=" w-full h-10  relative left-96 ">
            <input type="text"
                placeholder='search by bus no'
                className="p-2 border  w-1/3"
                onChange={(e)=>{setsub(e.target.value)}}
            />
            <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSearch}
            >
            Search
            </button>
         </div>
        </div>
        <div className="w-full text-center">
          <div className="text-xl">
            <div>
              {/* Conditional rendering of the result */}
              {result !== null ? (
                (
                    <div className="text-blue-600 font-bold">
                        <div className="text-2xl ">
                Search Result of {sub} bus no
              </div>
                        {Object.keys(result).map((dst,index)=>{
                            return(
                        <p key={index}>
                            {dst}:{result[dst]}
                            </p>)
                    })}</div>
                  )
              ) :((<div className="text-gray-600">..</div>))}
            </div>

            <div>
                {bus!==null ?(
                    <div className="text-blue-600 font-bold">
                    <div className="text-2xl bg-">
            YOU HAVE TO TRAVEL IN BUS NO {bus} ;
          </div>
          </div>
                ):(<div className="text-gray-600"> Please perform a search.</div>) }
            </div>
          </div>
        </div>
    </div>

        
        </>
    )
}
export default Loginkbaad;