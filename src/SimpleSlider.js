import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import First from './First';
import Second from './Second'; 

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
      autoplayinterval:5000 
    

    };
    return (
      <div >  
        <Slider {...settings} >
              <div>
           <First />
              </div>
                  <div>
           <Second />
              </div>
        </Slider>
      </div>
    );  }
}

export default SimpleSlider;