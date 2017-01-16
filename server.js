/*
    Gregory Dymarek 16/01/2017
*/

var express = require('express');
var app = express();
var fs = require("fs");

// S: ================ API: All flights
app.get('/flights', function(req, res) {
    fs.readFile(__dirname + "/" + "flights.json", 'utf8', function(err, data) {
        res.end(data);
    });
})
// E: ================ API: All flights

// S: ================ API: All arrivals
app.get('/flights/arrivals', function(req, res) {
    fs.readFile(__dirname + "/" + "flights.json", 'utf8', function(err, data) {
        flights = JSON.parse(data);

        var arrFlights = flights.filter(
            function(obj) {
                return (obj.ArrDep == 'A');
            });

        res.end(JSON.stringify(arrFlights));
    });
})
// E: ================ API: All arrivals


// S: ================ API: All departures
app.get('/flights/departures', function(req, res) {
    fs.readFile(__dirname + "/" + "flights.json", 'utf8', function(err, data) {
        flights = JSON.parse(data);

        var depFlights = flights.filter(
            function(obj) {
                return (obj.ArrDep == 'D');
            });

        res.end(JSON.stringify(depFlights));
    });
})
// E: ================ API: All departures

// S: ================ API: Flight number
app.get('/flights/flight/:id', function(req, res) {
    fs.readFile(__dirname + "/" + "flights.json", 'utf8', function(err, data) {
        flights = JSON.parse(data);

        var flight = flights.filter(
            function(obj) {
                return (obj.FlightNo == req.params.id);
            });

        res.end(JSON.stringify(flight));
    });
})
// E: ================ API: Flight number

// S: ================ Error handling
app.get('/*', function(req, res) {
    var error = {
        'Error': 'Unknown request'
    };
    res.end(JSON.stringify(error));
})
// E: ================ Error handling

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
})
