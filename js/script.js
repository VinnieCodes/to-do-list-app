function newItem() {
  // adding new item to the list
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("Write something");
  } else {
    $("#list").addClass("fade-in");
    $("#list").append(li);
  }

  // crossing an item out
  li.on("click", function () {
    li.toggleClass("strike");
  });

  // adding a delete button
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("dblclick", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }
  // $("#list").sortable();
}
