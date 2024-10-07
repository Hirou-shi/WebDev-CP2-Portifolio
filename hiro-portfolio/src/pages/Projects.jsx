import React from 'react'

export default function Project() {
    return(
        <>
            <body className='min-h-screen min-w-full bg-gradient-to-b from-[#030027] to-[#0B008D]'>
                <div className=' flex justify-center font-bold text-[40px] gap-3 p-5 pt-[8%]'>
                    <h1 className='text-white'>My recents</h1>
                    <h1 className='text-[#3523FF]'>Projects</h1>
                </div>
                <div className='flex flex-wrap justify-center gap-6 p-4'>
                    <div className=" bg-black/50 shadow-lg rounded-lg overflow-hidden max-w-xs">
                            <img
                                src='/Global.png'
                                alt='Imagem do site global'
                                className="w-full h-48 object-cover"
                                />
                        <div className="p-4">
                            <h2 className="text-white text-xl font-bold mb-2">Global</h2>
                            <p className="text-gray-700">This have CSS, Javascripts and HTML basics functions.</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                            Learn More
                            </button>
                        </div>
                    </div>
                    <div className="bg-black/50 shadow-lg rounded-lg overflow-hidden max-w-xs">
                            <img
                                src='/Airbnb.png'
                                alt='Imagem do site global'
                                className="w-full h-48 object-cover"
                                />

                        <div className="p-4">
                            <h2 className="text-white text-xl font-bold mb-2">Airbnb Clone</h2>
                            <p className="text-gray-700">This have CSS, Javascripts and HTML basics functions.</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                            Learn More
                            </button>
                        </div>
                    </div>
                    </div>
                
            </body>
        </>
    );
};