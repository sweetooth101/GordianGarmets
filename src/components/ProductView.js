import React, { Component } from 'react';
import Carousel from './helpful/carousel';


import './general.css'

class ProductView extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    }
  }

  render() {
    

    return (
      <div className='view-item'>
        

        <div className='imgItem-wrapper'>
           
          <div className='img-item'>
            <Carousel/>
     
          </div>


        </div>


        <div className='detail-wrapper'>
          <div className='item-description'>

              <h2>Mascaria</h2>
              <h1>20$</h1>
              <div className='size'>
                <h1>Size Adult</h1>
              </div>

              
              <button>Buy Now</button>

            <div className='summary'>
              This is the classic beaker tube by Maverick Glass. This 18'' tall bong features a 18mm to 14mm removable diffused downstem and comes with a 14mm male bowl. The ice pinch allows you to stack ice for an extra level of cooling. This highly functional bong will be sure to please and may quickly become your daily driver. The glass is 5mm thick. Made by Maverick Glass in California using high quality borosilicate glass.
            </div>
            <div className='details'>
              <p>•Beaker Base Bong</p>
              <p>•18mm to 14mm Diffused Downstem</p>
              <p>•14mm Male bowl</p>
              <p>•Ice Pinch</p>
              <p>•18'' Inches Tall</p>
              <p>•5mm Thick</p>
            </div>
           </div>

        </div>

      </div >
    )
  }
}


export default ProductView;