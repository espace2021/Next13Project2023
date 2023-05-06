import React from "react";
import Image from "next/image";
import Link from 'next/link';


function SectionFirstLook({categorie}) {
      
    return (
      <section className="first-look">
       <h2>{categorie.nomcategorie} <Link className="first-look-link" href={`/firstLookCateg/${categorie._id}/${categorie.nomcategorie}`}>&gt; &gt; Découvrir</Link></h2>
         <div className="first-look-container">
             
            <Image
                src={categorie.imagecategorie}
                alt={categorie.nomcategorie}
                fill
                style={{objectFit:"cover"}}
              />
          
          </div>
        </section>
      );
}

export default SectionFirstLook;