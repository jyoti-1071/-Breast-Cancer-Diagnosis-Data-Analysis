// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");

// Set filteredBCdata to dataSet initially
var filteredBCword= dataSet; 

// renderTable renders the filterdata to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredBCword.length; i++) {
    // Get get the current patient object and its fields
    var word = filteredBCword[i];
    var observations = Object.keys(word);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < observations.length; j++) {
      // For every observations in the ufo object, create a new cell at set its inner text to be the current value at the current     ufo'sobservation
      var observation = observations[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = word[observation];
    }
  }
}



// Render the table for the first time on page load
renderTable();
