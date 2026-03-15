"use client"

import { family } from "@/data/family"
import PersonCard from "@/components/PersonCard"
import { motion } from "framer-motion"

export default function PersonPage({
params
}:{params:{id:string}}){

const person = family[params.id]

if(!person) return <div>Not Found</div>

return(

<div className="container">

<h1>{person.name}</h1>

<PersonCard
id={person.id}
name={person.name}
image={person.image}
/>

{person.children && (

<>
<h2>Children</h2>

<motion.div
className="grid"
initial={{opacity:0,x:-100}}
animate={{opacity:1,x:0}}
transition={{duration:0.5}}
>

{person.children.map((id)=>{

const child = family[id]

return(

<PersonCard
key={id}
id={child.id}
name={child.name}
image={child.image}
/>

)

})}

</motion.div>
</>

)}

</div>

)

}