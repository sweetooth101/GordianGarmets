import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default (props) =>(
    

    <Carousel showArrows={false} showStatus={false} showIndicators={false} showThumbs={true}>
        
        <div>
            <img src={require('../../img/testfacemask.jpg')} alt='something' />
        </div>
        <div>
            <img src={require('../../img/testfacemask.jpg')} alt='something' />
        </div>
    </Carousel>





)
     