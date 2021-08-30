import React from 'react'
import categoryData from "data/categories.json"

function Categories() {
    return (
        <div className="bg-white py-4">
            <div className="container mx-auto">
                <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10  gap-y-3">
                    {
                        categoryData.map(item => (
                            <a href="#" key={item.id} className="flex flex-col p-3 transition rounded-lg
                                hover:bg-purple-100 items-center text-center group">
                                <img src={item.image} alt={item.title} lazy={true} 
                                className="rounded w-12 h-12" />
                                <span className="text-sm font-semibold text-gray-500 group-hover:text-gray-800">{item.title}</span>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories
