import React,{useState} from 'react';
const Loginkbaad=()=>{
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleSearch = () => {
        // You can implement your search logic here
        console.log(`Searching from ${from} to ${to}`);
      }
    
    return(
        <>
        <div className="h-screen bg-slate-300">
            <h1>you r succesfully loggedin</h1>
            <div className="text-black/120 mb-2 inline-block bg-black text-2xl text-white
            w-full text-center ml-2 mr-2">
                Find your bus in delhi 
            </div>
            <div className="bg-gray-200 p-4">
        <div className="flex items-center space-x-4">
                <input
                type="text"
                placeholder="From"
                className="p-2 border rounded w-1/2"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                />
                <input
                type="text"
                placeholder="To"
                className="p-2 border rounded w-1/2"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                />
            <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSearch}
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
            />
            <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleSearch}
            >
            Search
            </button>
         </div>
        </div>
    </div>

        
        </>
    )
}
export default Loginkbaad;