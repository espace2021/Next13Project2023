import Link from "next/link";

function AboutPage() {
  const id=1
  return (
   <div> 
        <Link href={`/photo/${id}`}>
          Profile detail
        </Link>
  </div>
 
  )
}

export default AboutPage

