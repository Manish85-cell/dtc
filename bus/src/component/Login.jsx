import React,{useState} from 'react';
import bus1 from "./bus1.png";

export default function Login(){
    
        
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(`Username: ${username}, Password: ${password}`);
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
      </div>
    </div>
  </div>
    </>
  )
    
}