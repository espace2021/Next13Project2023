"use client" ;
import Link from 'next/link'

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const DetailCateg = ({scategories}) => {
  return (
    <center>
      <Carousel width="30%">
         {scategories?.map((scategory) => (
              <div key={scategory?._id}>
              <img src={scategory?.imagescat} alt="image"/>
               <Link href={`/firstLookArticles/${scategory._id}/${scategory.nomscategorie}`}>
                      <p className="legend">{scategory?.nomscategorie}</p>
               </Link>      
              </div>
            ))}
      </Carousel>
   </center>

   )
}

export default DetailCateg
