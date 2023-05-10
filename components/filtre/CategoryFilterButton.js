'use client';
import React from 'react'


export default function CategoryFilterButton(props) {
  const { multiSelectExpanded, setMultiSelectExpanded } = props

  return (
    <>
      <div 
        className='category-filter-dropdown' 
        onClick={() => setMultiSelectExpanded(!multiSelectExpanded)}
        style={{ backgroundColor: multiSelectExpanded ? `#fff` : ``}}
      >
        <span className='category-filter-title' >S/Category Filter</span>
        <img
          width="20"
          height="20"
          src="/images/arrow.png"
          style={{
            transform: multiSelectExpanded ? `rotate(180deg)` : `rotate(0deg)`,
            transitionDuration: `150ms`,
          }}
        />
      </div>
    </>
  )
}