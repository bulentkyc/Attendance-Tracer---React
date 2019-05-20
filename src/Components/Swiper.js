import React,{Component} from 'react';
import Swiper from 'react-id-swiper';

class Swipper extends Component {

    render() {
    const items = [];

    for (let val of this.props.imgArr) {
        items.push(<div class="swiper-slide"><img src={val} alt=""/></div>);
    }

    return(
        <Swiper>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
    );
    }
}

export default Swipper;