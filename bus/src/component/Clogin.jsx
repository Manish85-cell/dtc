import React,{useState,useEffect} from 'react';
import axios from 'axios';
import bus1 from "./bus1.png";
import { useNavigate } from 'react-router-dom';


const Clogin=()=>{
  const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [con,setcon]=useState([]);
    const [result,setresult]=useState([])
    
    useEffect(()=>{
      async function getallcon(){
          try{
              const conductor=await axios.get("http://127.0.0.1:8000/routes/conductor/?format=json")
              setcon(conductor.data);
              console.log(con);
          }
          catch(error){
              console.log("error");
          }
      }
      getallcon()
  },[]);


    const handleLogin = () => {
      const num=parseInt(username);
      const c=con.find((e)=>e.C_id===num);
      const cp=con.find((e)=>e.C_name===password);
      if (c && cp && c.C_id === cp.C_id) {
        // Successful login, navigate to another page
        setresult(c);
        navigate(`/sucesslogin/${c.C_id}/${c.salary}/${c.working_shift}`);
      } else {
        // Handle unsuccessful login (e.g., show an error message)
        console.log("Login failed");
        setresult(null)
    }
    }

  return (
    <>
  <div className="bg-slate-300">

        <div className="relative inset-0 mt-5 w-1/2 h-1/2  top-20">
            <img src={bus1} alt="anypic" className="w-full h-full object-cover" />
        </div>
    <div className="flex h-1/2  relative  left-60 bottom-60 ml-80">
      <div className="w-1/2 h-1/2 bg-white p-6 rounded-lg shadow-md  ml-40">/
        <h2 className="text-2xl font-bold mb-4"> Login </h2>
            <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          onClick={handleLogin}
        >
          Login
        </button>
        {/* {result != null?(
          <div className="text-blue-600 font-bold">
          <div className="text-2xl bg-">
  Your salary is  {result.salary} ;<br/>
  Your salary is  {result.working_shift} ;
</div>
</div>
        ):(
          <div className="text-gray-600"> Please perform a search.</div>
        )} */}
      </div>
    </div>
  </div>
    </>
  )
    
}
export default Clogin;