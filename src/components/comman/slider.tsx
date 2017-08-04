import * as React from 'react';
const HSJson = require('../homeSlides.json');
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import "./slider.scss";
import Slider from 'react-slick';

export interface MainSliderProps {
    imgs?: any
}

class MainSlider extends React.Component<MainSliderProps, any> {
    constructor(){
		super()
		this.state={ act: '',
		path: ''
		}
	}
	componentDidMount() {
        setTimeout(
            this.setState({ act: 'act' })
        ,0)
    }
    componentWillUnmount(){
        setTimeout(
            this.setState({ act: '' })
        ,0)
    }
    render() {
    const settings = {
	  dots: true,
	  autoplay: true,
	  fade: false,
	  draggable: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
	  nextArrow: <a><i className="fa fa-angle-right"></i></a>,
	  prevArrow: <a><i className="fa fa-angle-left"></i></a>
    };
    const slider = this.props.imgs !== undefined && this.props.imgs.length > 0 ? 
        <Slider {...settings}>
            {
                 this.props.imgs.map((slide:any, i:number) => 
                    <div key={i}
                        style={{backgroundImage:`url(${require(`Images/${slide.url}`)})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'}} >
                    </div>) 
            }
        </Slider>
        : HSJson.slides.length > 0 ? <Slider {...settings}>
            {
                 HSJson.slides.map((slide:any, i:number) => 
                    <div key={i}
                        style={{backgroundImage:`url(${require(`Images/${slide.Url}`)})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'}} >
                    </div>) 
            }
        </Slider>: ''
    return (
        <div className="row">
        <div className="col-xs-12">
            {slider}
        </div>                      
        </div>
    );
  }
}

export default MainSlider;
