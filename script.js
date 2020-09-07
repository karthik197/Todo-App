var addItem = document.getElementById('add');
var updateItem = document.getElementById('update');
var deleteItem = document.getElementById('delete');
var List=document.getElementById('list');
var inputItem = document.getElementById('input');
var inputValue = '';

//store the input field value
inputItem.addEventListener('input', function(e){
    inputValue=e.target.value;
});

//add the item when enter key is pressed
inputItem.addEventListener('keyup', function(e){
    if(e.keyCode===13){
        addListItem();
    }
});

//del the item when enter key is pressed
var body = document.getElementsByTagName("body")[0];
body.addEventListener('keyup', function(e){
    if(e.keyCode===46){
        deleteListItem();
    }
});
//add item
function addListItem(){
    if(inputValue!==null && inputValue!==undefined && inputValue!==''){
        var newListElement = document.createElement('li');
        var text=document.createTextNode(inputValue);
        newListElement.id=inputValue;
        newListElement.appendChild(text);
        List.appendChild(newListElement);
        inputItem.value='';
        inputValue='';
    }
    else{
        alert('Enter an anime in the text field and then click add');
    }
}
//delete item
function deleteListItem(){
    var delInput=prompt("Enter the anime that you want to delete");
    delInput.replace(' ', '');
    var delEle=document.getElementById(delInput);
    delEle.parentNode.removeChild(delEle);
    
}
//update item
function updateListItem(){
    var updateInput=prompt("Enter the anime name that you want to Update");
    updateInput.replace(' ', '');
    var replace=prompt("Enter the anime name to update");
    document.getElementById(updateInput).innerHTML=replace;
    document.getElementById(updateInput).id=replace;
}

//event listeners
addItem.addEventListener('click',addListItem);
deleteItem.addEventListener('click',deleteListItem);
updateItem.addEventListener('click',updateListItem);