function searchExcel() {
 // Get search input value
 var searchValue = document.getElementById("search").value;
	
 // Clear previous search results
 var table = document.getElementById("excel-data");
 table.innerHTML = "";
 var header = table.createTHead();
 var row = header.insertRow(0);
 row.insertCell(0).innerHTML = "<b>Name</b>";
 row.insertCell(1).innerHTML = "<b>Age</b>";
 row.insertCell(2).innerHTML = "<b>City</b>";
	
 // Search for matching data in Excel sheet
 for (var i = 0; i < excelData.length; i++) {
  if (excelData[i][0].toLowerCase().includes(searchValue.toLowerCase())) {
   row = table.insertRow();
   row.insertCell(0).innerHTML = excelData[i][0];
   row.insertCell(1).innerHTML = excelData[i][1];
   row.insertCell(2).innerHTML = excelData[i][2];
  }
 }
}

// Example Excel sheet data
var excelData = [
 ["John Doe", 25, "New York"],
 ["Jane Smith", 30, "San Francisco"],
 ["Bob Johnson", 40, "Chicago"],
 ["Alice Lee", 35, "Los Angeles"]
];
