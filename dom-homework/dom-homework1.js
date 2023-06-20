
// gets the id mydiv from the html document and creates a header.

document.addEventListener('DOMContentLoaded', function(){
    var mydiv = document.getElementById('mydiv');
    var heading = document.createElement('h1');
    heading.textContent = "Welcome to DOM homework";
    mydiv.appendChild(heading);

    // creates a paragraph and adds it to mydiv

    var paragraph = document.createElement('p');
    paragraph.textContent = "This is your first DOM homework assignment";
    mydiv.appendChild(paragraph);

    //creates a unordered list and adds item_one to it

    var unorder_list = document.createElement('ul');
    var item_one = document.createElement('li');
    item_one.textContent = "I like dogs";
    unorder_list.appendChild(item_one);

    // adds a item to the ul list

    var item_two = document.createElement("li");
    item_two.textContent = "I like cats";
    unorder_list.appendChild(item_two);

    // adds a item to the ul list

    var item_three = document.createElement("li");
    item_three.textContent = "I like snakes";
    unorder_list.appendChild(item_three);

    // appends p, ul, and li to mydiv

    mydiv.appendChild(unorder_list);


});

