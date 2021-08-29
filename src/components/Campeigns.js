import React from 'react'
import Slider from "react-slick";
import campaignData from "data/banners.json"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"


function SampleNextArrow(props) {
    const { onClick } = props
    return (
      <button onClick={onClick} className="absolute top-1/2 -right-6 -translate-y-1/2">
          <AiOutlineRight size={22} />
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props
    return (
      <button onClick={onClick} className="absolute top-1/2 -left-6 -translate-y-1/2">
            <AiOutlineLeft size={22} />
        </button>
    );
  }

function Campeigns() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <div className="container mx-auto mt-10"> 
            <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>
            <Slider {...settings}>
                {
                    campaignData.map(item => (
                        <div key={item.id}>
                            <picture className="block px-2">
                                <img className="w-full object-cover rounded-lg"  src={item.image} alt="" />
                            </picture>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Campeigns
