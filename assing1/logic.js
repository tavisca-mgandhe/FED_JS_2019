// JavaScript source code
function showSuggestions() {
  document.getElementsByClassName("autocomplete")[0].style.display = 'block';
}

function hideSuggestions() {
  document.getElementsByClassName("autocomplete")[0].style.display = 'none';
}

function showTab(tabname) {
  let x = document.querySelectorAll(".content-tab");
  let len = x[0].childElementCount;//get number of childs(divisions) in 1st class element

  for (let i = 0; i < len; i++) {
      x[0].children[i].style.display = 'none';
  }

  document.getElementById("tab-" + tabname).style.display = 'block';
}

var todoList = ["brush", "run", "bath", "play", "code", "sleep", "eat","clean"];
function addActivity()
{
  let activity = document.getElementsByName("searchbox")[0].value;//get value in textbox
  todoList.push(activity);
createTODOList();
}

function createAutoCompleteList() {

  clearAutoCompleteList();

  let searchKey = document.getElementsByName("searchbox")[0].value;//get value in textbox

  if (searchKey == "") {
      return;
  }
    
  for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].startsWith(searchKey)) {

          var listItem = document.createElement("li");
          var node = document.createTextNode(todoList[i]);
          listItem.appendChild(node);

          var element = document.getElementById("autocomplete-list");
          element.appendChild(listItem);
      }
  }
}
function showResults() {

  clearTODOList();

  let searchKey = document.getElementsByName("searchbox")[0].value;//get value in textbox

     
  for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].startsWith(searchKey)) {

          var listItem = document.createElement("li");
          var node = document.createTextNode(todoList[i]);
          listItem.appendChild(node);

          var element = document.getElementById("todo");
          element.appendChild(listItem);
      }
  }
}
function createTODOList() {

  clearTODOList();
 
    
  for (let i = 0; i < todoList.length; i++) {
    var listItem = document.createElement("li");
    var node = document.createTextNode(todoList[i]);
          listItem.appendChild(node);

          var element = document.getElementById("todo");
          element.appendChild(listItem);
       
  }
}

function clearAutoCompleteList() {
  var element = document.getElementById("autocomplete-list");
  while (element.lastElementChild != null) {
      element.removeChild(element.lastElementChild);
  }  }
  function clearTODOList() {
    var element = document.getElementById("todo");
    while (element.lastElementChild != null) {
        element.removeChild(element.lastElementChild);
    }
      /*for (let i = 0; i < element.childElementCount; i++) {
        
      }*/
 }
