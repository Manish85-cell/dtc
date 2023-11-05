import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
function App() {
    const [buses, setBus] = useState([])
   useEffect(()=>{
       async function getAllStudent(){
           try{
               const buses = await axios.get("http://127.0.0.1:8000/routes/bus/")
               console.log(buses.data)
               setStudent(buses.data)
           } catch(error){
              console.log(error)
           }

       }
       getAllStudent()
   }, [])

   return (
    <div className='App'>
        <h1>Connect React to Django</h1>
    </div>
   );
}

export default App
