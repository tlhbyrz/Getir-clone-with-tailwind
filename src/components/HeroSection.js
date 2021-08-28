import React, { useState } from 'react'
import Slider from "react-slick";
import { FaFacebook } from "react-icons/fa"
import ReactFlagsSelect from 'react-flags-select';

function HeroSection() {
    const [selected, setSelected] = useState('TR');

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    const phoneNumbers = {
		US: '+1',
		GB: '+5',
		FR: '+70',
		DE: '+30',
		IT: '+11',
		TR: '+90',
	}

    return (
        <section className="relative before:bg-gradient-to-r before:from-purple-600 before:to-transparent before:absolute before:inset-0 before:w-full before:h-[500px] before:z-10">
            <Slider {...settings}>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt="" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" alt="" />
                </div>
            </Slider>
            <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-10">
                <div>
                    <img  height={180} width={180}
                        src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
                   
                    <h3 className="text-white font-semibold text-4xl mt-6">
                        Dakikalar içinde <br/> kapınızda
                    </h3>
                </div>
                <div className="w-[400px] bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-purple-600 font-semibold text-center">Giriş yap veya kayıt ol</h3>
                    <div className="grid gap-y-4">
                        <div className="flex mt-8 gap-x-2">
                            <ReactFlagsSelect
                                countries={Object.keys(phoneNumbers)}
                                customLabels={phoneNumbers}
                                selected={selected}
                                onSelect={code => setSelected(code)}
                                className="flags-select"
                            />
                            <label className="flex-1 relative">
                                <input required type="text" className="border-2 border-gray-300 rounded-lg w-full h-14 
                                    px-4 hover:border-purple-700 focus:border-purple-700 
                                    transition-all outline-none peer text-sm pt-3" />
                                <span className="absolute top-0 left-0 flex items-center px-4 h-full transition-all
                                text-sm text-gray-400 peer-focus:h-6 peer-focus:text-xs peer-focus:text-purple-700
                                peer-valid:h-6 peer-valid:text-xs peer-valid:text-purple-700">Telefon Numarası</span>    
                            </label>
                        </div>
                        <button className="w-full flex items-center justify-center bg-yellow-400 text-purple-700 font-semibold 
                        text-sm h-12 rounded-lg transition-all hover:bg-purple-700 hover:text-yellow-400">
                            Telefon numarası ile devam et
                        </button>
                        <hr className="h-[1px] w-full bg-gray-300 my-2"/>
                        <button className="w-full flex items-center bg-blue-100 text-blue-700 font-semibold 
                        text-sm h-12 rounded-lg transition-all px-3 hover:bg-blue-700 hover:text-blue-100">
                            <FaFacebook size={18} />
                            <span className="mx-auto">Facebook ile devam et</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
