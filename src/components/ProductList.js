import React, { Component } from 'react';



import Product from './Product'
import { Link } from 'react-router-dom';

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }



    render() {
        return (
            <div className='prodDisplay-wrapper'>
                <div className='yellow-bg'>

                    <div className='prodDisplayBG'>
                        <Link className='link-prod' to='/view'> <Product /></Link>
                        

                    </div>
                </div>

            </div>
        )
    }
}


export default ProductList;