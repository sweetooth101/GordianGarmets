import React, { Component } from 'react';



import Product from './Product'
import { Link } from 'react-router-dom';

import './general.css'

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
                 
                <Link className='link-prod' to='/view'> <Product /></Link>
                <Link className='link-prod' to='/view'> <Product /></Link>
                <Link className='link-prod' to='/view'> <Product /></Link>
                <Link className='link-prod' to='/view'> <Product /></Link>
                <Link className='link-prod' to='/view'> <Product /></Link>
                <Link className='link-prod' to='/view'> <Product /></Link>

            </div>
        )
    }
}


export default ProductList;