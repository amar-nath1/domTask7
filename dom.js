let elem=document.querySelector(".list-group")
// Parent Node
// console.log(elem.parentNode)

// // elem.parentNode.style.backgroundColor='Bisque'

// console.log(elem.parentNode.parentNode)

// // Parent Element 
// elem.parentElement.style.backgroundColor='Bisque'

// //Child Nodes
// console.log(elem.childNodes)

// // Children
// console.log(elem.children)

// // first child
// console.log(elem.firstChild)

// firstElementChild

// console.log(elem.firstElementChild)
// elem.firstElementChild.textContent='Hello 1' 

// // last child
// console.log(elem.firstChild)

// //lastelmentchild

// console.log(elem.lastElementChild)
// elem.lastElementChild.textContent='Hello 4'

// nextsibling
// console.log(elem.nextSibling)

// nextElementSibling
// console.log(elem.nextElementSibling)

// previoussibling
// console.log(elem.nextSibling)

// previousElementSibling
// console.log(elem.previousElementSibling)

// Create Element( Creating a Div)

let newdiv= document.createElement('div')


// Add class name to the element
newdiv.className='testdivclass'

//Add id to the element
newdiv.id='testdivid'

// Set attribute
newdiv.setAttribute('title','testdivtitle')

// create text node
let newdivtext = document.createTextNode('This is test text node')

// Add text to div
newdiv.appendChild(newdivtext)

console.log(newdiv)



