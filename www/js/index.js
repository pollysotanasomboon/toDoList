
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