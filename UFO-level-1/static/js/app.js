console.log("app.js loaded");

// from data.js
var tableData = data;

console.log(tableData);

var tbody = d3.select("tbody");

tableData.forEach(function (ufoSightings) {
    console.log(ufoSightings);

    var row = tbody.append("tr");

    Object.entries(ufoSightings).forEach(function ([key, value]) {
        console.log(`key = ${key}, value = ${value}`);

        var cell = row.append("td");

        cell.text(value);

    });

});


var button = d3.select("#filter-btn");

button.on("click", runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputElement);

    tbody.html("");

    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
    console.log(filteredData);


    filteredData.forEach(function (dates) {
        console.log(dates);

        var row = tbody.append("tr");

        Object.entries(dates).forEach(function ([key, value]) {
            console.log(key, value);

            var cell = row.append("td");

            cell.text(value);
        });


    });





}
