'use client';
import React from 'react'

// Components
import CategoryFilterDrowdown from "./CategoryFilterDrowdown"
import CategoryFilterButton from "./CategoryFilterButton"

export default function CategoryFilter(props) {
  const { 
    multiSelectExpanded, 
    setMultiSelectExpanded, 
    currentCategories, 
    setCategoryQuery 
  } = props

  return (
    <>
      <CategoryFilterButton 
        setMultiSelectExpanded={setMultiSelectExpanded}
        multiSelectExpanded={multiSelectExpanded}
      />

      {multiSelectExpanded && (
        <CategoryFilterDrowdown
          currentCategories={currentCategories} 
          categoryQuery={setCategoryQuery}
        />
      )}
    </>
  )
}