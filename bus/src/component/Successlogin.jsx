import React from 'react';
import { useParams } from 'react-router-dom';
const Successlogin=()=>{
    const {param1,param2,param3}=useParams();

    return(
        <>
        <div className="bg-gray-100 min-h-screen p-4">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Important Message for our Employees</h1>

            <p className="text-lg text-gray-700 mb-4">
                Welcome to our company! We appreciate your hard work and dedication to our system.
            </p>

            <table className="w-1/2 mx-auto border-collapse border border-gray-400">
                <thead className="bg-gray-200">
                <tr>
                    <th className="py-2 px-4 border border-gray-400">Employee ID</th>
                    <th className="py-2 px-4 border border-gray-400">salary</th>
                    <th className="py-2 px-4 border border-gray-400">workingshift</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="py-2 px-4 border border-gray-400">{param1}</td>
                    <td className="py-2 px-4 border border-gray-400">{param2}</td>
                    <td className="py-2 px-4 border border-gray-400">{param3}</td>
                </tr>
                </tbody>
            </table>
        </div>
        </>
    )
    
}
export default Successlogin;