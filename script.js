var addToDontButton = document.getElementById('addToDont');
var addTotalShame = document.getElementById('totalShame');
let toDontContainer = document.getElementById('toDontContainer');
let inputField = document.getElementById('inputField');
let shameArray = [];

addToDontButton.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDontContainer.appendChild(paragraph);
  inputField.value = ""; 
  shameArray.push(1);
  paragraph.addEventListener('dblclick', function(){
  toDontContainer.removeChild(paragraph);
  shameArray.pop(1);
      })
    })

addTotalShame.addEventListener('click', function(){
   if (shameArray.length === 0) {window.alert("Great Job!")}
  else {window.alert("Shame!");}})