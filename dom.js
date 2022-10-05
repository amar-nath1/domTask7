// creating element before item lister

let newp1=document.createElement('p')
let textforp1=document.createTextNode('HEllo')

newp1.appendChild(textforp1)

let insaf=document.querySelector('header .container')
let insbef=document.querySelector('#header-title')

insaf.insertBefore(newp1,insbef)

// creating element before item1
let lifirst=document.createElement("li")
lifirst.className='list-group-item'
let litem=document.createTextNode('HEllo')

lifirst.appendChild(litem)

let insbefore=document.getElementsByClassName('list-group-item')[0]
let insafter=insbefore.parentElement

insafter.insertBefore(lifirst,insbefore);
