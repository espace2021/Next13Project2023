'use client';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

// Components
import ArticleItem from "./ArticleItem"
import CategoryFilter from "./CategoryFilter"

// Plugins
import ClickAwayListener from '@mui/base/ClickAwayListener';

// StyleSheets
import "./style.css"

const ArticleFiltre = ({ postsPerPage }) => {

  const [searchQuery, setSearchQuery] = useState("")
  const [currentCategories, setCategoryQuery] = useState("")
  const [multiSelectExpanded, setMultiSelectExpanded] = useState(false);
  const [posts, setPosts] = useState([])
  const [currentPosts, setCurrentPosts] = useState([])
  const [pageCount, setPageCount] = useState(0);
  const [postOffset, setPostOffset] = useState(0);

  
  useEffect(() => {
    const endOffset = postOffset + 10;
    const categories = currentCategories;
    if(categories && categories.length >0){ 
      
      const data =postsPerPage.filter(cat => categories.includes(cat.scategorieID?._id));
     
      setPosts(data)
      setCurrentPosts(data.slice(postOffset, endOffset));
      setPageCount(Math.ceil(data.length / 10));
      
    }
    else{ 
    setPosts(postsPerPage)
    setCurrentPosts(postsPerPage.slice(postOffset, endOffset));
    setPageCount(Math.ceil(postsPerPage.length /10));
    }
  }, [postOffset, postsPerPage, searchQuery, currentCategories])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % posts.length;

    setPostOffset(newOffset);
  };

  const handleClickAway = () => {
    setMultiSelectExpanded(false)
  }


  return (
    <div>

    <ClickAwayListener onClickAway={handleClickAway}>
      <div className='category-filter-container'>
        <CategoryFilter 
          multiSelectExpanded={multiSelectExpanded}
          setMultiSelectExpanded={setMultiSelectExpanded}
          currentCategories={currentCategories} 
          setCategoryQuery={setCategoryQuery}
        />
      </div>
    </ClickAwayListener>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {currentPosts.map((post, index) => ( 
      <ArticleItem
        key={index}
        title={post.designation || post.item.designation}
        price={post.prix || post.item.prix}
        categories={post.scategorieID?.nomscategorie || post.item?.scategorieID?.nomscategorie}
        url={post.imageart || post.item.imageart}
      />
    ))}
    </div>

    {(currentPosts.length > 0 && posts.length > 1) &&
      <ReactPaginate
        onPageChange={handlePageClick}
        pageLinkClassName="page-link"
        renderOnZeroPageCount={null}
        breakLabel="..."
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
     />
        
    }

  </div>
  )
}

export default ArticleFiltre
