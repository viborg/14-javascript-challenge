// from data.js, which contains the UFO sighting reports
var tableData = data;

// YOUR CODE HERE!
// Use D3 to get a reference to the table body where the data will be placed
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);

    var sightingsCount = reportSightings(inputValue);

    if (sightingsCount === 0) {
        inputElement.text("Invalid date");
    }
});

function reportSightings(datetime) {
    var filteredData = tableData.filter(sighting => sighting.datetime === datetime);

    filteredData.forEach(function(UFOReport) {
        // log each report
        console.log(UFOReport);

        // use D3 to append one new table row for each report in data.js,
        // which will then be used to append cells 
        var row = tbody.append("tr");

        // use Javascrip Object.entries to pull each value for each report
        Object.entries(UFOReport).forEach(([key, value]) => {
            console.log(key, value);
            // Use D3 to update each cell's text with UFO sighting values from data.js
            var cell = row.append("td");
            cell.text(value);
        });
    });

    return filteredData.length

}
