import React, { useEffect, useState } from 'react';
import axios from "axios";
import usebusinfo from '../assets/Api';

export default function Routes(){
    const [dest,getdest]=useState([]);
    const [src,setsrc]=useState("");
    const [data1,setdata1]=useState([]);
    const handleSearch = (event) => {
        onSearch(event.target.value);
      }
    useEffect(()=>{
        async function getallroutes(){
            try{
                const routes=await axios.get("http://127.0.0.1:8000/routes/routes/?format=json")
                setdata1(routes.data);
            }
            catch(error){
                console.log("error");
            }
        }
        getallroutes();
    },[])
    const a=usebusinfo();
    console.log(a);
    const combinelist=data1.map((src,index)=>({
        "asrc": src.source,
        "bcd" : a[index],
        "arch" : src.reachable,

    }))
    console.log("hiii");
    console.log(combinelist);
    return(
        <>
        <div className="bg-gray-200 container h-screen flex flex-col  ">
            <h1 className="bg-blue-500 text-white text-4xl px-4 py-2 rounded-lg">ROUTES</h1>
            <div className="my-4 text-center">
                <p className="text-gray-800">
                Welcome to our bus route information page. Here, you can find details about the various bus routes available in our area. Whether you're a commuter or a tourist, our routes are designed to provide you with convenient and reliable transportation options.
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 border rounded"
                        onChange={handleSearch}
                    />
                    <div className="flex flex-col container h-screen">
                    <div className="overflow-auto">
                        <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr>
                            <th className="border px-4 py-2">source </th>
                            <th className="border px-4 py-2">destination </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            combinelist.map((routes,index)=>{
                                
                                    return(
                                        <>
                                       <tr key={index }>
                                        <td className="border px-4 py-2">{routes.asrc.value}</td>
                                        <td className="border px-4 py-2">{routes.bcd.value}</td>
                                        <td className="border px-4 py-2">{routes.arch.value}</td>

                                    </tr>
                                    </>
                                    )
                                    
                                })
                            }

                            </tbody>
                        </table>
                       
                        </div>
                    
                    </div>
                </p>
        {/* You can add more content here, such as a list of routes, a map, or any other relevant information. */}
            </div>
        </div>
        </>
    )
}