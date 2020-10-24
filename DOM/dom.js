var item = document.getElementById('item').value;
var submit = document.getElementById('addItem');
var itemList = document.getElementById('items');

var search = document.getElementById('search');


submit.addEventListener('click', AddItem);
itemList.addEventListener('click', removeItem);
search.addEventListener('keyup', searchItem);

// function to add item
function AddItem(e) {
    e.preventDefault();
    console.log("Clicked");


    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';

    // add text node to class
    li.appendChild(document.createTextNode(newItem));

    // create del button
    var delBut = document.createElement('button');
    // class to button
    delBut.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    delBut.appendChild(document.createTextNode('X'))


    // append del button to li
    li.appendChild(delBut);

    // append li to items list
    itemList.appendChild(li);

    // remove text after click
    document.getElementById('item').value = "";

}


// remove function

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        console.log(li);
        itemList.removeChild(li);
    }
}


// Filter function

function searchItem(e) {
    e.preventDefault();

    var text = e.target.value.toLowerCase();
    console.log(text);

    var items = itemList.getElementsByTagName('li');

    console.log(items);
    // <- HTML COLLECTION

    // convert to array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        console.log(itemName);
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })









}
