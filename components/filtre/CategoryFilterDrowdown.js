'use client';
import React, { useState } from 'react'
// Components
import CategoryInput from "./CategoryInput"

const CategoryFilterDrowdown = (props) => {
    const { currentCategories, categoryQuery } = props

  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    const res= await fetch('https://backendmulter2023.onrender.com/api/scategories')
     const response = await res.json();
     setCategories(response)
    }
   
   React.useEffect(() => {
    getCategories();
     
    }, [categories]);

  return (
    <div className='category-container'>
      <div className='category-container-header'>
        Filter By S/Category
      </div>

      {categories.map((category, index) => (
        <CategoryInput 
          key={index}
          currentCategories={currentCategories}
          categoryQuery={categoryQuery}
          category={category}
          index={index}
        />
      ))}
    </div>
  )
}

export default CategoryFilterDrowdown
