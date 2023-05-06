
import Listproducts from '@/components/products/Listcard';
import React from 'react'

async function getProducts(){
 
    const res= await fetch('https://backendmulter2023.onrender.com/api/articles', { cache: 'no-store' })
    const products = await res.json();
    return products;
}

const ListproductCards = async () => {
  const products = await getProducts();
  
  return (
    <div>
        <Listproducts products={products} />
    </div>
  )
}

export default ListproductCards
