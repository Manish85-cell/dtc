import React from 'react';
export default function Routes(){
    const handleSearch = (event) => {
        onSearch(event.target.value);
      }
    return(
        <>
        <div className="bg-gray-200 h-screen flex flex-col  ">
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
                </p>
        {/* You can add more content here, such as a list of routes, a map, or any other relevant information. */}
            </div>
        </div>
        </>
    )
}