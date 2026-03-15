"use client"

import { family } from "@/data/family"
import PersonCard from "@/components/PersonCard"
import { motion } from "framer-motion"

export default function Home(){

return(

<div className="container">

<h1>Family Tree</h1>

<motion.div
className="grid"
initial={{opacity:0,y:60}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
>

<PersonCard {...family["A"]}/>
<PersonCard {...family["B"]}/>

</motion.div>

</div>

)

}