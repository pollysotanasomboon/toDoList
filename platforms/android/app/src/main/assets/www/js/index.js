
function add(){
  //Retrieve the entered form data
  var title = $('[name = "item"]').val();

  //Fetch the existing items
  items = getItems();

  //Push the new item into the existing list
  items.push({
    title: title
  });

  //Store the newlist
  saveItems(items);

  //Reload the page to show the new item
  window.location.reload();
}

function getItems(){
  //See if items is inside localStorage
  if (localStorage.getItem("items")){

    //If yes, then load the existing task
    items = JSON.parse(localStorage.getItem("items"));
  }
  else{
    //Make a new array of items
    items = new Array();

    //Save into local storage
    localStorage.setItem("items", JSON.stringify(items));
  }
  return items;
}

function saveItems(items){
  //Save the list into localStorage
  localStorage.setItem("items", JSON.stringify(items));
}

function homepage(){
  //Fetch the existing items
  items = getItems();

  //Clear the list
  $('#items').find('li').remove();

  //Add every item to the items list
  $.each(items, function(index, item){
    element = $('<li><a class="toggle" data-id="' + index + '" href="#"><h2>' + item.title + '</h2></a><a href="view.html?' + index + '"></li>');

    if (item.done){
      element.css('opacity', 5);
    }
    $('#items').append(element);
  });
  //Let JQuery re-render our list
  $('#items').listview('refresh');
}

function toggle(id){
  //Fetch all the items
  items = getItems();

  //Find the requested item
  item = items[id];

  //Toggle the status
  item.done = (item.done) ? false : true;

  //Write back to the item list
  items[id] = item;

  //Write back to the storage
  saveItems(items);

  //Reload the page
  window.location.reload();
}

$(document).on('pagebeforeshow', '#home', function(event){
  homepage();
});

$(document).on('click', 'toggle', function(){
  id = $(this).data('id');

  toggle(id);
});