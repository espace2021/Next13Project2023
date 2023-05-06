"use client" ;

import React from 'react'


const DetailArticle = ({articles}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    
     {
      articles.map(product =>{
        
return   <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={product._id}>
        <div className="flex flex-col items-center pb-10">
        <img className="w-50 h-60 mb-3 shadow-lg" src={product.imageart} alt="Bonnie image"/>
        <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{product.designation}</h3>
        <h5 className="text-sm text-gray-500 dark:text-gray-400">{product.marque}</h5>
        <h4 className="text-sm text-gray-500 dark:text-gray-400">{product.prix} DT</h4>
    </div>
</div>

      })
     }
    </div>

   )
}

export default DetailArticle

//avec multer ajouter à src image
//"https://backendmulter2023.onrender.com/images/"+
