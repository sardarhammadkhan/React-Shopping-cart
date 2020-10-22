import React from 'react'
import Cart from './Cart'
import ProductList from './ProductList'
import {data} from '../../data.json'
function Products() {
    return (
        <div className='container-fluid' >
            <div class="row">
            <div className='col-8'>
                 <ProductList details={data}/>
                </div>  
                <div className='col-4 ' style={{backgroundColor:'#A9A9A9'}}>
                <Cart/>
                </div>
            </div>
        </div>
    )
}

export default Products
