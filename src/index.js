document.addEventListener("DOMContentLoaded", () => {
 document.querySelector('form').addEventListener("submit", (e) => {
   e.preventDefault()
   handleToDo(e.target.grabable.value) 
   const targs = 
   console.log(e.target)
 }) // your code here
})
 
function handleToDo(todo) {
  let p = document.createElement('p')
p.textContent = todo
document.querySelector('#tasks').appendChild(p);
}
