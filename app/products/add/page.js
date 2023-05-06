import React from 'react'
import Ajoutproduct from '../../../components/products/Ajoutproduct';

async function getScategories(){
 
  const res= await fetch('https://backendmulter2023.onrender.com/api/scategories')
  const scategories = await res.json();
  return scategories;
}

const Add = async() => {
  const scategories = await getScategories();
  return (
  <Ajoutproduct scategories={scategories}/> 
  )
}

export default Add