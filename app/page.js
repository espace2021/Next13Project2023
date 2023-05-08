import React from 'react';
import SectionFirstLook from '../components/homePages/SectionFirstLook';


async function getCategories(){
 
    const res= await fetch('https://backendmulter2023.onrender.com/api/categories', { cache: 'no-store' })
    const categories = await res.json();
    return categories;
}

export default async function Home() {

  const categories = await getCategories();
  return (
    <div>
        
      <div>
        {categories.map((categorie,index) => (
          <SectionFirstLook
            key={index}
            categorie={categorie}
           />
        ))}
      </div>
    </div>
  )
}
