import { family } from "@/data/family"
import PersonCard from "@/components/PersonCard"

export default function PersonPage({
  params,
}: {
  params: { id: string }
}) {

const person = family[params.id]

if (!person) {
  return <div style={{padding:40}}>Person not found</div>
}

return (

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

<div className="grid">

{person.children.map((id) => {

const child = family[id]

return (

<PersonCard
key={id}
id={child.id}
name={child.name}
image={child.image}
/>

)

})}

</div>
</>

)}

</div>

)

}