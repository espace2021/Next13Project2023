import React from 'react'

const ArticleItem = (props) => {
  return (
   <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3  shadow-lg" src={props.url} alt=""/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.title}</h5>
        <h6 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.price} TND</h6>
        <span className="text-sm text-gray-500 dark:text-gray-400">{props.categories}</span>
    </div>
</div>
 
  )
}

export default ArticleItem

/*
Ajouter à src pour multer
"https://backendmulter2023.onrender.com/images/"+
*/