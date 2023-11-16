import React, { useState,useEffect} from 'react';
import { json, useNavigate } from 'react-router-dom';
import axios from "axios";
const Ticket=()=>{
    const navigate = useNavigate();
    const [create,setcreate]=useState(false);
    const [details,setdetails]=useState(false);
    const [input,setinput]=useState({});
    const [one,setone]=useState(0);
    const [two,settwo]=useState(0);
    const [third,setthird]=useState(0);
    const [four,setfour]=useState(0);
    const [res,setres]=useState("");
    const [b,setb]=useState([]);
    const [bs,setbs]=useState([]);

    useEffect(()=>{
      async function getdata(){
          const bus=await axios.get("http://127.0.0.1:8000/routes/bus/?format=json")
          setbs(bus.data);
          const bstd=await axios.get("http://127.0.0.1:8000/routes/bus_stand/?format=json")
          setb(bstd.data);

      }
      getdata();
  },[]);
  
   
        const handleChange=(event)=>{
            const name=event.target.name;
            const value=event.target.value;
            setinput(values=>({...values,[name]:value}))
            if(name === 'sourceCode'){
              setone(event.target.value);
            }
            if(name === 'destinationCode'){
              settwo(event.target.value);
            }
            if(name === 'busNo'){
              setthird(event.target.value);
            }
            if(name=== 'ticketid'){
              setfour(event.target.value);
            }

        }
        const handleSubmit= async (e)=>{

            e.preventDefault();
            try{
                const response=await axios.post('http://localhost/aman/dir/process_bus.php',input);
                console.log(response.data);
            }catch (error) {
                // Handle errors, for example, log them
                console.error('Error submitting data:', error);
              }
             // const src=b.find((e)=>e.route.some((stop)=>))
             const num1=parseInt(one);
             const num2=parseInt(two);
             const num3=parseInt(third);
             const srcstand=b.find((e)=>e.code===num1);
             const deststand=b.find((e)=>e.code===num2);
             const bus=bs.find((e) =>e.bus_code===num3);
             if(!srcstand || !deststand){
              alert("pls enter right thing ");
             }
             const ans1=bus.route.find((e)=>e===srcstand.Name);
             const ans2=bus.route.find((e)=>e===deststand.Name);
              // console.log(srcstand);
              // console.log(deststand);
              // console.log(bus);
              // console.log(ans1);
              // console.log(ans2);
              if(ans1 && ans2){
                const queryParams = new URLSearchParams(input).toString();
                navigate(`/afterticket/${queryParams}`);
              }
              else{
                alert("pls enter right thing ")
              }
            }
     const form=()=>{
           return(
            <>
            <div className="container mx-auto mt-8">
      <form className="max-w-md mx-auto p-8 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Bus Reservation Form </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={handleChange}
            required
          />
        </div>

        {/* Source Code Field */}
        <div className="mb-4">
          <label htmlFor="sourceCode" className="block text-sm font-medium text-gray-600">
            Source Code
          </label>
          <input
            type="text"
            id="sourceCode"
            name="sourceCode"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={handleChange}
            required
          />
        </div>

        {/* Destination Code Field */}
        <div className="mb-4">
          <label htmlFor="destinationCode" className="block text-sm font-medium text-gray-600">
            Destination Code
          </label>
          <input
            type="text"
            id="destinationCode"
            name="destinationCode"
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Bus Number Field */}
        <div className="mb-6">
          <label htmlFor="busNo" className="block text-sm font-medium text-gray-600">
            Bus Number
          </label>
          <input
            type="text"
            id="busNo"
            onChange={handleChange}
            name="busNo"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </form>
    </div>
            </>
        )
    }
    const handleSubmit1=async (e)=>{
      e.preventDefault();
      try{
          const response=await axios.get('http://localhost/aman/dir/process_ticket.php');
          setres(response.data);
          //console.log( response.data);
      }catch (error) {
          // Handle errors, for example, log them
          console.error('Error submitting data:', error);
        }
       
        const real1=res.slice(23,-1);
        const real2='['+real1+']';
        const jsonArray = JSON.parse(real2);
        const ans=jsonArray.find((e)=>e.ticketid === four);
        console.log(ans);
        console.log(four);
        const anss=document.getElementById("answer");
        if(ans){
            
            anss.textContent="  Sourcecode : "+ans.sourceCode+ "  Destinationcode: "+ans.destinationCode+"  Busno : " +ans.busNo;
        }else{
            anss.textContent="write the correct ticket idd";
        }

    }
    const detals=()=>{
      return(
        <>
        <div className="container mx-auto mt-8">
      <form className="max-w-md mx-auto p-8 bg-white rounded shadow-md" onSubmit={handleSubmit1}>
        <h2 className="text-2xl font-bold mb-6">TICKET DETAILS  </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Ticket id
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={(e)=>setfour(e.target.value)}
            required
          />
          <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
        </div>
        <div id='answer' className="text-red-500 bg-gray-100 p-4 rounded-md shadow-md">

        </div>
      </form>
    </div>
        </>
      )
    }
    return(
        <>
        <div className="h-screen bg-red-500 justify-center ">
            <div className="bg-white p-8 rounded shadow-md flex-row">
                <button className="ml-48 rounded shadow-black bg-slate-300
                hover:bg-red-600 focus:outline-none focus:shadow-outline-blue" onClick={()=>setcreate(!create)}>CREATE A TICKET </button>
                <button className="relative ml-96 left-40
                 bg-slate-300
                 hover:bg-red-600 focus:outline-none focus:shadow-outline-blue" onClick={()=>setdetails(!details)}>DETAILS OF A TICKET </button>
            </div>
            {
                create === false ? (
                    <h1></h1>
                ):(form())
            }
          {
                details === false ? (
                    <h1></h1>
                ):(detals())
            }
            {
              create=== false && details === false ?(
                <div className="text-4xl text-center p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
  Choose to Generate a Ticket or View Ticket Details
</div>

              ):(<h1></h1>)
            }
        </div>
        </>
    )
}
export default Ticket;