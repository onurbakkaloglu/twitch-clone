import SliderSlick from "react-slick";
import { useEffect, useState } from "react";
import { Icon } from "components/Icon/icon";

function Slider() {

    const NextArrow = ({onClick}) => {
        return (
          <div className="arrow absolute cursor-pointer z-10 next w-12 right-2 top-2/4" onClick={onClick}>
            <Icon name={'rightArrow'} />
          </div>
        )
    }
    
    const PrevArrow = ({onClick}) => {
        return (
          <div className="arrow absolute cursor-pointer z-10 prev w-12 left-2 top-2/4" onClick={onClick}>
            <Icon name={'leftArrow'} />
          </div>
        )
    }

    const settings = {
        infinite:true,
        lazyLoad: true,
        speed: 300,
        slidesToShow:3,
        centerMode: true, 
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImgIndex(next),
    };

    let [images, setImages] = useState([]);
    const [imgIndex,setImgIndex] = useState(0)

    useEffect (() =>{
        fetch("/api/card/games")
        .then((response) => response.json())
        .then((json) => setImages(json.map(x=> x.imgSrc)))
    }, []);
    return (
        <div className="carousel w-full relative">
            <div className="text-center m-auto">
                {
                    images.length > 0 && (
                        <SliderSlick {...settings}>
                            {images.map((img, idx) => (
                            <div key={idx} className={idx === imgIndex ? "slide activeSlide" : "slide"}>
                                <img className="w-[20rem] mx-auto my-0" src={img} alt={idx} />
                            </div>
                            ))}
                        </SliderSlick>
                    )
                }
            </div>
        </div>
    );
}

export default Slider;