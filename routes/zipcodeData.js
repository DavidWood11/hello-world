var http = require("http");
var fs = require("fs");
var path = require("path");
var request = require("request");
var cheerio = require("cheerio");
var waterfall = require('async-waterfall');
var jquery = require('jquery');

var mongoose = require('mongoose');
var Post = mongoose.model('Post');

var google = require('googleapis');
var customsearch = google.customsearch('v1');

var geocoderProvider = 'google';
var httpAdapter = 'http';

var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter);

var express = require('express');
var router = express.Router();

var output = "";

router.get('/zipcodeData', function(req, res, next) {
  res.render('zipcodeData', { title: 'Company Search',
                              name: output[0], 
                              address: output[2],
                              type : output[3],
                              secondType: output[4],
                              lat: output[5],
                              lon: output[6],
                              violentCrime: output[7],
                              natV: output[8],
                              propertyCrime: output[9],
                              natP: output[10],
                              population: output[11],
                              tornado: output[12],
                              sTornado: output[13], 
                              nTornado: output[14], 
                              flood: output[15],
                              hail: output[16]
                            });
});


module.exports = router;