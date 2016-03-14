var request = require("request");

var link = 'http://www.bbb.org/new-orleans/business-reviews/towing-automotive/dale-s-towing-and-storage-in-gretna-la-90003363'; 

request(link, function(error, response, html){

  // check for errors
  if(!error){
    console.log(html);
  }

});