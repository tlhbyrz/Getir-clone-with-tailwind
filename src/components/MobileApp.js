import React from 'react'

function MobileApp() {
    return (
        <div className="container mx-auto flex justify-between bg-brand-color bg-mobile-app rounded-lg mt-7" >
            <div className="p-10 flex flex-col justify-center gap-y-4">
                <h2 className="font-bold text-white text-2xl tracking-tight">Getir'i indirin!</h2>
                <span className="text-white text-base font-semibold">
                    İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
                </span>
                <nav className="flex items-center gap-x-2 pt-5">
                    <a href="#" className="transition transform hover:scale-95">
                        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
                    </a>
                    <a href="#" className="transition transform hover:scale-95">
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
                    </a>
                    <a href="#" className="transition transform hover:scale-95">
                        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
                    </a>
                </nav>
            </div>
            <picture className="pt-6 hidden sm:flex items-end">
                <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
            </picture>
        </div>
    )
}

export default MobileApp
