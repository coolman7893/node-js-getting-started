var rowindex,
table = document.getElementById("table");

// check the empty input
function checkempty() {
var isEmpty = false,
  name = document.getElementById("name").value,
  width = document.getElementById("width").value,
  height = document.getElementById("height").value,
  color = document.getElementById("color").value;

if (name === "") {
  alert("Name can't Be Empty");
  isEmpty = true;
} else if (width === "") {
  alert("Width can't Be Empty");
  isEmpty = true;
} else if (height === "") {
  alert("Height can't Be Empty");
  isEmpty = true;
} else if (color === "") {
  alert("Color can't Be Empty");
  isEmpty = true;
}
return isEmpty;
}

// add Row
function addrow() {
// get the table by id
// create a new row and cells
// get value from input text
// set the values into row cell's
if (!checkempty()) {
  var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    name = document.getElementById("name").value,
    width = document.getElementById("width").value,
    height = document.getElementById("height").value,
    color = document.getElementById("color").value;

  cell1.innerHTML = name;
  cell2.innerHTML = width;
  cell3.innerHTML = height;
  cell4.innerHTML = color;
  // call the function to set the event to the new row
  selectrow();
}
}

// display selected row data into input text
function selectrow() {
for (var i = 1; i < table.rows.length; i++) {
  table.rows[i].onclick = function () {
    // get the seected row index
    rowindex = this.rowIndex;
    document.getElementById("name").value = this.cells[0].innerHTML;
    document.getElementById("width").value = this.cells[1].innerHTML;
    document.getElementById("height").value = this.cells[2].innerHTML;
    document.getElementById("color").value = this.cells[3].innerHTML;
  };
}
}
selectrow();

function editrow() {
var name = document.getElementById("name").value,
  width = document.getElementById("width").value,
  height = document.getElementById("height").value,
  color = document.getElementById("color").value;
if (!checkempty()) {
  table.rows[rowindex].cells[0].innerHTML = name;
  table.rows[rowindex].cells[1].innerHTML = width;
  table.rows[rowindex].cells[2].innerHTML = height;
  table.rows[rowindex].cells[3].innerHTML = color;
}
}

function removerow() {
table.deleteRow(rowindex);
// clear input text
document.getElementById("name").value = "";
document.getElementById("width").value = "";
document.getElementById("height").value = "";
document.getElementById("color").value = "";
}