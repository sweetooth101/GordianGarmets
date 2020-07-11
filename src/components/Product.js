import React from "react";




const Product = () => {
  return (
    <div className='prod-wrapper' >
      <div className='circle-wrapper'>
        {/*<div className='circle'>
          <svg width='100%' height='100%' viewBox='0 0 24 24'>
            <circle cx='11' cy='11' r='10' stroke='#00AAE7' stoke-width='2' fill='white' />
            <path d="M12 12h4.1c.5 0 .9-.5.9-1s-.4-.9-.9-.9H12V5.9c0-.5-.5-.9-1-.9s-1 .4-1 .9v4.2H5.9c-.5 0-.9.4-.9.9s.4 1 .9 1H10v4.1c0 .5.4.9 1 .9s1-.4 1-.9V12z" fill="#00AAE7"></path>
          </svg>
        </div>*/}

      </div>

      <img src={require('../img/testfacemask.jpg')} alt='something' />
      <h1>GordianGarmets</h1>
      <div className='value'>
        <p>Value:</p>
        <p>$60</p>
      </div>



    </div>
  )
}
export default Product;
