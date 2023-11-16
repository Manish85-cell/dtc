import React, { useEffect, useState } from 'react';
import axios from "axios";
function usebusinfo(){
    const [bus,setbus]=useState([]);
    useEffect(()=>{
        async function getallbus(){
            try{
                const bus=await axios.get("http://127.0.0.1:8000/routes/bus_stand/?format=json")
                console.log(bus.data);
                setbus(bus.data);
            }
            catch(error){
                console.log("error ");
            }
        }
        getallbus()
    },[]);
    return bus;

}
export default usebusinfo;

