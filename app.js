let addToDoButton = document.getElementById('addBtn');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

function add() {
  var para = document.createElement("P"); 
  para.classList.add('paragraph-styling')
  para.innerText = inputField.value;
  toDoContainer.appendChild(para);
  inputField.value= "";
  para.addEventListener('click', function(){
    para.style.textDecoration = "line-through";
  })
  para.addEventListener('dblclick', function(){
    toDoContainer.removeChild(para);
  })
  
}
