import React from 'react'
import UpdateProduct from '@/components/products/UpdateProduct'

async function getScategories(){
 
  const res= await fetch('https://backendmulter2023.onrender.com/api/scategories')
  const scategories = await res.json();
  return scategories;
}

const updateproductPage = async({params}) => {

  const scategories = await getScategories();

  return (
    <div>
     <UpdateProduct params={params} scategories={scategories} />
      
    </div>
  )
}

export default updateproductPage
