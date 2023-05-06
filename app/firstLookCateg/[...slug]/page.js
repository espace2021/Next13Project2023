import React from 'react'
import DetailCateg from '@/components/homePages/DetailCateg';

async function getScategories(categorieID){

    const res= await fetch(`https://backendmulter2023.onrender.com/api/scategories/cat/${categorieID}`, { cache: 'no-store' })
    const scategories = await res.json();
    return scategories;
  }

const DetailCategPage = async({params}) => {
    const scategories = await getScategories(params.slug[0])
   
  return (
    <div>
      <h2>{decodeURI(params.slug[1])}</h2>
      <DetailCateg scategories={scategories} />
    </div>
  )
}

export default DetailCategPage
