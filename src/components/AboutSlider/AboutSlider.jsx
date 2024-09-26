import React from 'react';
import './AboutSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import p1 from '../../images/applepodcasts.png'
import p2 from '../../images/facebookgaming.png'
import p3 from '../../images/instagram.png'
import p4 from '../../images/snapchat.png'
import p5 from '../../images/telegram.png'
import p6 from '../../images/tiktok.png'
import p7 from '../../images/twitch.png'
import p8 from '../../images/youtube.png'



export default function AboutSlider() {
    const aboutSliderData = [
        {
            logo: p1,
            
            
        },
        {
            logo: p2,
            
        },
        {
            logo: p3,
            
        },
        {
            logo: p4,
            
        },
        {
            
            logo: p5,
            
        },
        {
            logo: p6,
            
        },
        {
            logo: p7,
            
        },
        {
            
            logo: p8,
            
        },
        
    ]
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1, // Updated to 1 for better behavior
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1, // Updated to 1 for better behavior
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1 // Keep consistent with the number of slides shown
                }
            }
        ]
    };
    
    return (
        <>
            <div className="aboutslider-section">
                <div className="aboutslider-container">
                    <h1>Certified By</h1>
                    <div className="aboutslider">
                        <Slider {...settings}>
                            {
                                aboutSliderData.map((item, i) => {

                                    let bgClass = '';
                                    if ((i + 1) % 3 === 1) {
                                        bgClass = 'bg1';
                                    } else if ((i + 1) % 3 === 2) {
                                        bgClass = 'bg2';
                                    } else {
                                        bgClass = 'bg3';
                                    }

                                    return (
                                        <div key={i} className={`slider-container ${bgClass}`}>
                                            <div className='slider-image-container'>
                                                <img src={item?.logo} alt='logo' className='slider-image' />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>

        </>
    );
}