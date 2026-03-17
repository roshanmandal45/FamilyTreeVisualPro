export type Person = {
  id: string
  name: string
  image: string
  children?: string[]
}

export const family: Record<string, Person> = {

A:{
id:"A",
name:"RatiLal Mandal",
image:"/people/a.jpg",
children:["C","D","E"]
},

B:{
id:"B",
name:"BinaDevi Mandal",
image:"/people/b.jpg",
children:["C","D","E"]
},

C:{
id:"C",
name:"Child C",
image:"/people/c.jpg",
children:["F","G","H"]
},

D:{
id:"D",
name:"Child D",
image:"/people/d.jpg"
},

E:{
id:"E",
name:"Child E",
image:"/people/e.jpg"
},

F:{
id:"F",
name:"Family F",
image:"/people/f.jpg",
children:["f1","f2"]
},

G:{
id:"G",
name:"Family G",
image:"/people/g.jpg",
children:["g1","g2","g3"]
},

H:{
id:"H",
name:"Family H",
image:"/people/h.jpg",
children:["h1","h2","h3"]
},

f1:{id:"f1",name:"Kid",image:"/people/kid.jpg"},
f2:{id:"f2",name:"Kid",image:"/people/kid.jpg"},

g1:{id:"g1",name:"Kid",image:"/people/kid.jpg"},
g2:{id:"g2",name:"Kid",image:"/people/kid.jpg"},
g3:{id:"g3",name:"Kid",image:"/people/kid.jpg"},

h1:{id:"h1",name:"Kid",image:"/people/kid.jpg"},
h2:{id:"h2",name:"Kid",image:"/people/kid.jpg"},
h3:{id:"h3",name:"Kid",image:"/people/kid.jpg"}

}