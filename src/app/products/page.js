import React from 'react'
import Product from '../components/product';

async function getProducts(){
    const res =await fetch('https://dummyjson.com/products?limit=10&select=title,price')
       const data = await res.json();
       return data.products
   }
const page = async() => {
    const products = await getProducts();
    console.log(products)
    
  return (
    <>
    <h1 className='flex justify-center text-2xl font-bold mt-5 text-teal-600' >Products</h1>
    {
        products.length>0 &&(
            products.map(({id,title,price})=>(
                <Product key={id} id={id} title={title} price={price} />
            ))
        )
    }
    </>
  )
}

export default page