import React,{useState} from 'react';
const Bus=()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(`Username: ${username}, Password: ${password}`);
        }

  return (
    <>
    <div className="bg-slate-400">
        <div className="relative inset-0  w-1/2 h-1/2  top-5 ml-5">
            <img src="https://cracku.in/latest-govt-jobs/wp-content/uploads/2022/04/DTC-Logo.png" alt="anypic" className="w-full h-full object-cover" />
        </div>
    <div className="flex   relative  left-60 bottom-72 ml-80">
      <div className=" bottom-2  bg-white p-6 rounded-lg shadow-md  ml-48">/
        <h2 className="text-2xl font-bold mb-4">  EMPLOYEE LOGIN  </h2>
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
export default Bus;