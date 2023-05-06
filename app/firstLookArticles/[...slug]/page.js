import React from 'react'
import DetailArticles from '@/components/homePages/DetailArticles';

async function getArticles(scategorieID){

    const res= await fetch(`https://backendmulter2023.onrender.com/api/articles/scat/${scategorieID}`, { cache: 'no-store' })
    const articles = await res.json();
    return articles;
  }

const DetailArticlesPage = async({params}) => {
    const articles = await getArticles(params.slug[0])
   
  return (
    <div>
      <h2>{decodeURI(params.slug[1])}</h2>
      <DetailArticles articles={articles} />
    </div>
  )
}

export default DetailArticlesPage
