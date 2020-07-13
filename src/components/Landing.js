import React from 'react';
import ProductList from './ProductList';



function Landing(){
    

    return(
        <div className='landing'>
            
            <div className='top-header'>
                <h1>Gordian Garmets</h1>
            
                
            </div>

            <div className='product-container'>
                <ProductList />
            </div>
        </div>
    )

}

export default Landing;