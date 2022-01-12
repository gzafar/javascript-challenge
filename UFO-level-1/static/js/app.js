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
