var geocoderProvider = 'google';
var http = 'http';

var geocoder = require('node-geocoder')(geocoderProvider, http);

// Using callback
geocoder.geocode('5859 Veteran Memorial Hwy, Mamou, LA, 70554, US', function(err, res) {
    console.log(res);
});

// 76 1st St, Gretna, LA, 70053, US
// 6435 Common Street, Lake Charles, LA 70607, US

// 76 First Street, LA, GRETNA, 70053, US
// 5859 Veteran Memorial Hwy, Mamou, LA, 70554, US
// 6911 W Park Ave, Houma, LA, 70364, US

 var geocoder = require('node-geocoder')(geocoderProvider, http);

      console.log(address);

      geocoder.geocode(address, function(err, res) {
        
        console.log(res);

      });

            // get lat and lon
            var arr = string.match( /,"lat":"(.*?)","lon":"(.*?)",/ );
             
 
              var lat = arr[1];
              var lon = arr[2];
       

            output[5] = lat;
            output[6] = lon;

            callback(null, lat, lon, zip, newState, link);
          
       });  