import React from 'react'
import ArticleFiltre from '@/components/filtre/ArticleFiltre';

async function getProducts(){
 
  const res= await fetch('https://backendmulter2023.onrender.com/api/articles', { cache: 'no-store' })
  const products = await res.json();
  return products;
}

const FiltreArticlePage = async () => {
  const articles = await getProducts();
  return (
    <div>
      <ArticleFiltre postsPerPage={articles }/>
    </div>
  )
}

export default FiltreArticlePage
