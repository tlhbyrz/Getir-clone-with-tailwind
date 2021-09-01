import React from 'react'

function Footer() {
    return (
        <div className="bg-white mt-7">
            <div className="container mx-auto pt-10">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 px-3 xs:px-0">
                    <section>
                        <h3 className="mb-4 text-lg text-purple-700 font-semibold">Getir'i indirin!</h3>
                        <nav className="flex flex-col gap-y-4">
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
                    </section>
                    <section>
                        <h3 className="mb-4 text-lg text-purple-700 font-semibold">Getir'i keşfedin!</h3>
                        <nav className="flex flex-col gap-y-4">
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">Hakkımızda</a>
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">Kariyer</a>
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">İletişim</a>
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">COVID-19 Duyuru</a>
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">Sosyal Sorumluluk Projeleri</a>
                        </nav>
                    </section>
                    <section>
                        <h3 className="mb-4 text-lg text-purple-700 font-semibold">Yardıma mı ihtiyacınız var?</h3>
                        <nav className="flex flex-col gap-y-4">
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">Sıkça Sorulan Sorular</a>
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">Kişisel Verilerin Korunması</a>
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">Gizlilik Politikası</a>
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">Kullanım Koşulları</a>
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">Çerez Politikası</a>
                        </nav>
                    </section>
                    <section>
                        <h3 className="mb-4 text-lg text-purple-700 font-semibold">İş Ortağımız Olun</h3>
                        <nav className="flex flex-col gap-y-4">
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">Bayimiz Olun</a>
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">Deponuzu Kiralayın</a>
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">GetirYemek Restoranı Olun</a>
                            <a href="#" className="text-sm transition text-gray-500 hover:text-gray-900">GetirÇarşı İşletmesi Olun</a>
                        </nav>
                    </section>
                </div>
                <div className="my-5 bg-gray-200 h-[1px]" />
                <div className="flex pb-5 px-3 xs:px-0">
                    <p className="text-sm text-gray-600">© 2021 Getir</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
