import React, { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
import axios from "axios";
// function data(){
//     const bs

// }
const Afterticket=()=>{
    
    const {param1}=useParams();
    const str1=param1.split('&')
    const result=[];
    const result1={};
    str1.forEach(pair => {
        const [key, value] = pair.split('=');
        result.push({ [key]: value });
        result1[key]=value;
    });
    const r1=[];
    const a= Math.floor(10000 + Math.random() * 90000);
    r1.push({["ticketid"]: a},...result);
    const r2={["ticketid"]:a,...result1};

    useEffect(()=>{
        async function sticket(){
            try{
                const response=await axios.post("http://localhost/aman/dir/process_ticket.php",r2);
                console.log(response.data);

            }
            catch(error){
                console.log("error");
            }
        }
        sticket()
    },[]);
    return(
        <>
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-4xl font-bold text-indigo-600 mb-8">Have a Wonderful Journey!</div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        {r1.map((item, index) => (
          <div key={index} className="mb-4">
            {Object.keys(item).map(key => (
              <p key={key} className="text-lg font-semibold text-gray-800">
                {key}: {item[key]}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
      </>
    )
}
export default Afterticket;
