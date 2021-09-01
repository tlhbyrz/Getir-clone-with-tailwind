import React from 'react'
import cardsData from "data/cards.json"

function Cards() {
    return (
        <div className="container mx-auto mt-7 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-2">
            {
                cardsData.map(item => (
                    <div key={item.id} className="bg-white rounded-lg py-11 px-6
                     shadow-md flex flex-col items-center justify-center text-center">
                        <img className="w-[150px] h-[150px]" src={item.image} alt={item.title} />
                        <h4 className="text-purple-700 text-lg mt-6 font-semibold">{item.title}</h4>
                        <span className="mt-2 text-gray-500 text-sm">{item.description}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards
