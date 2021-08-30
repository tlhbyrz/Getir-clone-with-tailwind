import React from 'react'
import productsData from "data/favorites.json"
import { BsPlus } from "react-icons/bs"

function Favorites() {
    return (
        <div className="container mx-auto mt-10"> 
            <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
            <div className="grid grid-cols-8 gap-1 rounded-lg">
                {
                    productsData.map(item => (
                        <div className="bg-white relative flex flex-col items-center text-center gap-y-1 p-3 
                        text-sm font-semibold" key={item.id}>
                            <button className="absolute bg-white p-1 rounded-lg shadow-lg transition-all 
                                border border-gray-200 hover:border-purple-700 top-3 right-3 z-10 cursor-pointer">
                                <BsPlus size={18} />
                            </button>
                            <img src={item.image} alt={item.title} />
                            <p className="text-purple-700">{item.price}</p>
                            <h5 className="text-gray-800">{item.title}</h5>
                            <span className="text-gray-500">{item.alt}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites
