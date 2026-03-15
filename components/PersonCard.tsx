"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface Props{
id:string
name:string
image:string
}

export default function PersonCard({id,name,image}:Props){

return(

<Link href={`/person/${id}`}>

<motion.div
className="card"

initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}

whileHover={{scale:1.08}}
whileTap={{scale:0.95}}

transition={{duration:0.4}}
>

<Image
src={image}
alt={name}
width={120}
height={120}
/>

<p>{name}</p>

</motion.div>

</Link>

)

}