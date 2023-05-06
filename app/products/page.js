
import Listproducts from '@/components/products/Listproducts'
import React from 'react'

async function getProducts(){
 
    const res= await fetch('https://backendmulter2023.onrender.com/api/articles')
    const products = await res.json();
    return products;
}

const Listproduct = async () => {
  const products = await getProducts();
  
  return (
    <div>
        <Listproducts products={products} />
    </div>
  )
}

export default Listproduct
