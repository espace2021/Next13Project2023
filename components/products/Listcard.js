'use client';

import Link from 'next/link'
import React from 'react'

import { useRouter } from 'next/navigation';

const ListCards = (props) => {

    const router = useRouter()
   
    const[products,setProducts]=React.useState(props.products)

//Pour actualiser la liste

const getProducts = async () => {
 const res= await fetch('https://backendmulter2023.onrender.com/api/articles')
  const products = await res.json();
  setProducts(products)
 }

React.useEffect(() => {
  getProducts();
  
 }, [products]);

    //suppression

   const handleDelete=async(_id)=>{
           if(window.confirm("supprimer la catégorie O/N")) {
                    console.log(_id)
                    await ( fetch('https://backendmulter2023.onrender.com/api/articles/' + _id, {
                        method: "DELETE"
                    })).then(()=>{
                        router.push("/products/cards")
                    })
                    .catch(error=>{
                        console.log(error)
                        alert("Erreur ! Suppression non effectuée")
                    })
        }
    }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    
     {
      products.map(product =>{
        
return   <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={product._id}>
    <div className="flex justify-end px-4 pt-4">
       
      
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</Link>
            </li>
            <li>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</Link>
            </li>
            <li>
                <Link href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</Link>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={"https://backendmulter2023.onrender.com/images/"+product.imageart} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{product.designation}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{product.marque}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <Link href={`/products/update/${product._id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</Link>
            <span onClick={()=>handleDelete(product._id)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 border border-red-300 rounded-lg hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-red-200 dark:bg-red-800 dark:text-white dark:border-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 dark:focus:ring-red-700">Delete</span>
        </div>
    </div>
</div>

      })
     }
    </div>
  
  )
}

export default ListCards
