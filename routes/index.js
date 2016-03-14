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

var output = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Company Search' });
});

router.get('/exWeather', function(req, res, next) {
  res.render('exWeather', { title: 'Company Search',
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
                           hail: output[16],
                           locType: output[17],
                           industry: output[18],
                           ownership: output[19],
                           yearFonded: output[20],
                           salesRange: output[21],
                           employees: output[22],
                           accredited: output[23],
                           rating: output[24],
                           summary: output[25],
                           title2: output[26],
                           link: output[27]
                            });
});

router.get('/keyWord', function(req, res, next) {
  res.render('keyWord', { title: 'Company Search',
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
                           hail: output[16],
                           locType: output[17],
                           industry: output[18],
                           ownership: output[19],
                           yearFonded: output[20],
                           salesRange: output[21],
                           employees: output[22],
                           accredited: output[23],
                           rating: output[24],
                           summary: output[25],
                           title2: output[26],
                           link: output[27]
                            });
});

router.get('/caseSearch', function(req, res, next) {
  res.render('caseSearch', { title: 'Company Search',
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
                           hail: output[16],
                           locType: output[17],
                           industry: output[18],
                           ownership: output[19],
                           yearFonded: output[20],
                           salesRange: output[21],
                           employees: output[22],
                           accredited: output[23],
                           rating: output[24],
                           summary: output[25],
                           title2: output[26],
                           link: output[27]
                            });
});

router.get('/overMap', function(req, res, next) {
  res.render('overMap', { title: 'Company Search',
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
                           hail: output[16],
                           locType: output[17],
                           industry: output[18],
                           ownership: output[19],
                           yearFonded: output[20],
                           salesRange: output[21],
                           employees: output[22],
                           accredited: output[23],
                           rating: output[24],
                           summary: output[25],
                           title2: output[26],
                           link: output[27]
                            });
});

router.get('/streetLevel', function(req, res, next) {
  res.render('streetLevel', { title: 'Company Search',
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
                           hail: output[16],
                           locType: output[17],
                           industry: output[18],
                           ownership: output[19],
                           yearFonded: output[20],
                           salesRange: output[21],
                           employees: output[22],
                           accredited: output[23],
                           rating: output[24],
                           summary: output[25],
                           title2: output[26],
                           link: output[27]
                            });
});

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
                           hail: output[16],
                           locType: output[17],
                           industry: output[18],
                           ownership: output[19],
                           yearFonded: output[20],
                           salesRange: output[21],
                           employees: output[22],
                           accredited: output[23],
                           rating: output[24],
                           summary: output[25],
                           title2: output[26],
                           link: output[27],
                           Overall_COL: output[28],
                           n_Overall_COL: output[29],
                           Health: output[30],
                           n_Health: output[31],
                           Housing: output[32],
                           n_Housing: output[33],
                           Transportation: output[34],
                           n_Transportation: output[35]
                            });
});

router.get('/overview', function(req, res, next) {
  res.render('overview', { title: 'Company Search',
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
                           hail: output[16],
                           locType: output[17],
                           industry: output[18],
                           ownership: output[19],
                           yearFonded: output[20],
                           salesRange: output[21],
                           employees: output[22],
                           accredited: output[23],
                           rating: output[24],
                           summary: output[25],
                           title2: output[26],
                           link: output[27]
                          });
});

/* POST address */
router.post('/address', function(req, res) {

  waterfall([
    function form(callback){

      var address = req.body.address;

      // replace spaces with +
      var newAddress = address.replace( /\s|\+\+/g, '+' );

      var city = req.body.city
      var state = req.body.state;

      // will no longer be needed
      res.writeHead(200, {"Content-Type": "text/html; charset=utf-8" });

      callback(null, address, city, state, newAddress);

    },
    // get the first 20 links from a yahoo search
    function yahoo1( address, city, state, newAddress, callback ){

      var temp = [];

      var url = 'https://search.yahoo.com/search?p='+newAddress+"+"+city+"+"+state;
 
      console.log(url);

      request(url, function(error, response, html){
        // check for errors
        if(!error){
          
          callback(null, address, city, state, newAddress, url);
        }else{
        } 
      })
    }], function (err, address, city, state, newAddress, url) {
          setTimeout(function(){
            res.end("<p>"+address+" "+city+" "+state+" "+url+"</p>");
          }, 3000);
        }     
  )
})

router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){ return next(err); }

    res.json(posts);
  });
});

/* POST company name */
router.post('/', function(req, res) {

  // mongodb stuff
  //var post = new Post(req.body);

  // web scraping
  output = [];

  waterfall([
    // format the data coming from the user
    function formatFormData(callback){
      
      var name = req.body.name;
      var state = req.body.state;
      
      name = name.replace( /[\'|\"|,|\.|\&]/g, "" );
      state = state.replace( /[\'|\"|,|\.]/g, "" ); 

      var newName = name.replace( /\s|\+\+/g, '+' );
      newName = newName.replace( /\+\+/g, '+' );
      var newState = state.replace( /\s/g, '+' );

      output[0] = name;
      output[1] = newState;

      callback(null, newName, newState);
    },
    // initial yellowpages search for url
    function yp(newName, newState, callback){
      
      //get first page of links
      var url = "http://www.yellowpages.com/search?search_terms="+newName+"&geo_location_terms="+newState;

      var post = new Post({ypLink: url, name: newName, state: newState});

      post.save(function(err, posts){
        if(err){ return next(err); }

          console.log(post);

      });

      request(url, function(error, response, html){
        
        // check for errors
        if(!error){
        
          callback(null, html, newState, newName);
        }else{
        
          //res.write("<p>Could not find companies website from yahoo.</p>");
          //res.end("</body></html>"+x);
        } 
      })
    },
    // go to yellowpages link and get address, type, and company url 
    function initialInfo(html, newState, newName, callback){

       // load html into cheerio
       var $ = cheerio.load(html);

       // first <div class=info> for search-results organic
       var w = $("div[class='search-results organic']").children().first().children().children().first().next().children().first().next();

       var link = "http://www.yellowpages.com"+w.children('.n').children().attr('href');

       // get the specific data from html
       var name = w.children('.n').children().first().text();

       // primary info <p class=adr>
       var a = w.children("[class='info-section info-primary']").children('.adr');

       var streetAddress = a.children('.street-address').text();
       var locality = a.children('.locality').text();
       var state = a.children('.locality').next().text();
       var zip = a.children('.locality').next().next().text();
       
       // secondary info <p class=adr>
       var t = w.children("[class='info-section info-secondary']").children();

       var type = t.first().children().first().text();
       var secondType = t.first().children().first().next().text();

       // address string
       var address = streetAddress+', '+locality+state+', '+zip+', US';

       console.log(address);

       output[2] = address;
       output[3] = type;
       output[4] = secondType;

       callback(null, address, zip, newState, link, newName);
    },
    // get the first 20 links from a yahoo search
    function yahoo1( address, zip, newState, link, newName, callback ){

      var temp = [];

      var url = 'https://search.yahoo.com/search?p='+newName+'+'+newState+'&b=0&pz=20&bct=0&pstart=1';
 
      console.log(url);

      request(url, function(error, response, html){
        // check for errors
        if(!error){
          // load html into cheerio
          var $ = cheerio.load(html);

          $('div #web').children().first().children().each(function(i, element){
          
            var a = $(this).children().children().children().children().attr('href');
            temp.push(a);
          });

          callback(null, address, zip, newState, newName, link, temp);
        }else{
        } 
      })
    },
    // get the second 20 links form a yahoo search
    function yahoo2( address, zip, newState, newName, link, temp, callback ){

      var url = 'https://search.yahoo.com/search?p='+newName+'+'+newState+'&b=21&pz=20&bct=0&pstart=1';
 
      request(url, function(error, response, html){
        // check for errors
        if(!error){
          // load html into cheerio
          var $ = cheerio.load(html);

          $('div #web').children().first().children().each(function(i, element){
          
            var a = $(this).children().children().children().children().attr('href');
            temp.push(a);
          });

          callback(null, address, zip, newState, newName, link, temp);
        }else{
        } 
      })
    },
    // company info websites from yahoo search results
    function companyInfo( address, zip, newState, newName, link, temp, callback ){

      for ( var i in temp ){
      
        if ( /start\.cortera/.test(temp[i]) ){
      
          function cortera(x){

            var url = temp[i];

            request(url, function(error, response, html){
        
              // check for errors
              if(!error){
            
                // load html into cheerio
                var $ = cheerio.load(html);

                var locType = $('div #section-company').children().children().first().next().text().replace( /\s+/g, " " );
                var industry = $('div #section-company').children().children().first().next().next().text().replace( /\s+/g, " " );
                var ownership = $('div #section-company').children().children().first().next().next().next().text().replace( /\s+/g, " " );
                var yearFonded = $('div #section-company').children().children().first().next().next().next().next().text().replace( /\s+/g, " " );
                var salesRange = $('div #section-company').children().children().first().next().next().next().next().next().text().replace( /\s+/g, " " );
                var employees = $('div #section-company').children().children().first().next().next().next().next().next().next().text().replace( /\s+/g, " " );

                output[17] = locType;
                output[18] = industry;
                output[19] = ownership;
                output[20] = yearFonded;
                output[21] = salesRange;
                output[22] = employees;

              }else{
              } 
            
            })
          }
          cortera(temp[i]);
        }

        if ( /bbb/.test(temp[i]) ){
      
          function bbb(x){

            var url = temp[i];

            request(url, function(error, response, html){
        
              // check for errors
              if(!error){
            
                // load html into cheerio
                var $ = cheerio.load(html);

                var accredited = $('h3.accredited-since').text().replace( /\s+/g, " " );
                var rating = $('hr.visible-xxs').next().children().first().children().attr('alt');

                output[23] = accredited;
                output[24] = rating;

              }else{
              } 
            
            })
          }
          bbb(temp[i]);
        }

        if ( /truckcompaniesin/.test(temp[i]) ){
      
          function truckCompaniesIn(x){

            var url = temp[i];

            request(url, function(error, response, html){
        
              // check for errors
              if(!error){
            
                // load html into cheerio
                var $ = cheerio.load(html);

                var summary = $('p.rtnlnk').prev().prev().prev().text();

                output[25] = summary;

              }else{
              }           
            })
          }
          truckCompaniesIn(temp[i]);
        }
      }
      callback(null, address, zip, newState, link, newName);  
    },
    // geolocate based on address
    function geolocate(address, zip, newState, link, newName, callback){

      geocoder.geocode(address, function(err, res) {
        
        var string = JSON.stringify(res);

        // get lat and lon
        var arr = string.match( /,"latitude":(.*?),"longitude":(.*?),/ );
             
        var lat = arr[1];
        var lon = arr[2];
       
        console.log(lat+" "+lon);

        output[5] = lat;
        output[6] = lon;

        callback(null, zip, newState, link, newName)
      });     
    },
    // get the base url for best places
    function getBPurl(zip, newState, link, newName, callback){

      // open file and put url formulas in codes array test_url_formulas.csv
      codes = fs.readFileSync('text_for_url_formula.csv').toString().split("\n");
      var regex = new RegExp( zip );
      var m = "";
      
      // best places link extension
      codes.forEach( function(s){
        if ( s.match(regex) ){
          m = s;    
        }
      })

      callback(null, m, zip, newState, link, newName);  
    },
    // crime data from best places
    function crime(m, zip, newState, link, newName, callback){

      var url = "http://www.bestplaces.net/crime"+m;

      request(url, function(error, response, html){

        // check for errors
        if(!error){

        // give all bare td elements incrementing ids
        function enumerateIDs(html) {
          var id_ctr = 0;
          function enumerateId(match) {
            return '<td id="' + id_ctr++ +'">';
          }
          replaced = html.replace(/<td>/gi, enumerateId);
          return replaced;
        }
        enumerateIDs(html);

        // load html into cheerio
        var $ = cheerio.load(replaced);

        // get text from specific elements
        var violentCrime = $('#3').text();
        var natV = $('#4').text();
        var propertyCrime = $('#6').text();
        var natP = $('#7').text();

        output[7] = violentCrime;
        output[8] = natV;
        output[9] = propertyCrime;
        output[10] = natP;

        }
      });

      callback(null, m, zip, newState, link, newName);
    },
    function cost_of_living(m, zip, newState, link, newName, callback){

      var url = "http://www.bestplaces.net/cost_of_living"+m;

      request(url, function(error, response, html){

        // check for errors
        if(!error){

          // give all bare td elements incrementing ids
          function enumerateIDs(html) {
           var id_ctr = 0;
             function enumerateId(match) {
               return '<td id="' + id_ctr++ +'">';
             }
             replaced = html.replace(/<td>/gi, enumerateId);
           return replaced;
          }
        enumerateIDs(html);

        // load html into cheerio
        var $ = cheerio.load(replaced);

        // get text from specific elements
        var Overall_COL = $('#3').text();
        var n_Overall_COL = $('#4').text();
        var Grocery = $('#6').text();
        var Health = $('#9').text();
        var n_Health = $('#10').text();
        var Housing = $('#12').text();
        var n_Housing = $('#13').text();
        var Utilities = $('#15').text();
        var Transportation = $('#18').text();
        var n_Transportation = $('#19').text();
        var Miscellaneous = $('#21').text();

        output[28] = Overall_COL;
        output[29] = n_Overall_COL;
        output[30] = Health;
        output[31] = n_Health;
        output[32] = Housing;
        output[33] = n_Housing;
        output[34] = Transportation;
        output[35] = n_Transportation;

        }
      });

      callback(null, m, zip, newState, link, newName);
    },
    // population data from best places
    function population(m, zip, newState, link, newName, callback){
      
      // population
      var url = "http://www.bestplaces.net"+m;
    
      request(url, function(error, response, html){

        // check for errors
        if(!error){

          // load html into cheerio
          var $ = cheerio.load(html);

          // get text from specific elements
          var population = $('span.bignum').first().text();

          output[11] = population;

          //res.write('<div><table class="table" style="max-width: 400px;"><thead><tr><th>Population</th></tr></thead><tbody><tr><td>Population</td><td>'+population+'</td></tr></tbody></table></div><br>');
        }
      });

      callback(null, m, zip, newState, link, newName)
    },
    // extreme weather data
    function usa(m, zip, newState, link, newName, callback){
      // usa
      var url = "http://www.usa.com/"+zip+"-"+newState+"-natural-disasters-extremes.htm";

      request(url, function(error, response, html){

        // check for errors
        if(!error){
          // load html into cheerio
          var $ = cheerio.load(html);

          var tornado = $('table.tbb').first().prev().prev().prev().prev().prev().children().first().children().first().next().text();
          var sTornado = $('table.tbb').first().prev().prev().prev().prev().prev().children().first().next().children().first().next().text();
          var nTornado = $('table.tbb').first().prev().prev().prev().prev().prev().children().first().next().next().children().first().next().text();

          var flood = $('table.tbb').first().children().first().next().next().children().first().next().next().next().text();
          var hail = $('table.tbb').first().children().first().next().next().children().first().next().next().next().next().next().text();

          output[12] = tornado;
          output[13] = sTornado;
          output[14] = nTornado;
          output[15] = flood;
          output[16] = hail;

          //res.write('<br><div><table class="table" style="max-width: 400px;"><thead><tr><th>Extreme Weather</th><th>Zipcode</th><th>State</th><th>National</th></tr></thead><tbody><tr><td>Tornado Index</td><td>'+tornado+'</td><td>'+sTornado+'</td><td>'+nTornado+'</td></tr></tbody></table></div><br>');
          //res.write('<div><table class="table" style="max-width: 400px;"><thead><tr><th>Extreme Weather</th><th>Counts</th><tr><td>Flood</td><td>'+flood+'</td></tr><tr><td>Hail</td><td>'+hail+'</td></tr></tbody></table></div><br>');

        }else{
          //res.write("<p>Could not get data from usa.com</p>");
        }

        callback(null, link, newName);
      }) 
    },
    // get company website from yellowpages
    function initialWebsite(link, newName, callback){
      // get initial link
      request(link, function(error, response, html){

        // check for errors
        if(!error){

          // load html into cheerio
          var $ = cheerio.load(html);

          var link = $('footer').children().attr('href'); 

          callback(null, link, newName);
        }
      });  
    },
    // spider the companies website for urls
    function spider(link, newName, callback){
      
      var roll = [];

      var temp = ["Engine control module","Programming","Reprogram","Turbochargers","Superchargers"
      ,"drive-away","do it your self","transport","blades","wheel chair ramps","rebuilding","street parking",
      "Chip","Fuel","forced air","increase","air intake","exhaust","liquidation","lift gate","lift booms",
      "emergency","booting","alloy wheels","alteration","Racing","Nitrous","Propane","Manufacturing",
      "Custom","Lift kits","Welding"];

      var sites = ["index.php","service.php","about.php","booking.php","contact.php","directions.php",
                  "community.php","directions.php","service.php","about.php","booking.php","contact.php",
                  "privacy.php"];


      link = "http://www.bmchicago.com/";

      console.log(link);

      // get initial link
      request(link, function(error, response, html){

        // check for errors
        if(!error){
                
          //get root webpage address
          if ( link.match( /http:\/\/.*?\// ) ){
            var arr = link.match( /http:\/\/(.*?)\// );
          }else{
            var arr = link.match( /http:\/\/(.*?)/ );
          }

          var regex = new RegExp( arr[1] );

          // load html into cheerio
          var $ = cheerio.load(html);

          $('a').each(function(){
            console.log($(this).attr('href'));
          })

          var output = [];
    
          sites.forEach(function(q) {
              
              var ink = "http://www.bmchicago.com/"+q;

              request(ink, function(error, response, html){
                
                // check for errors
                if(!error){

                  // iterate through array
                  temp.forEach( function(s){  

                    //console.log(s);
                    //console.log(ink);

                    var re = new RegExp(s,"g");
                    
                    if ( html.match( re ) ){

                      console.log(ink);
                      console.log(s);  

                    }  

                  })
                }
              });
          });
        }else{
              //res.write("<p>Could not open companies website must be a broken link.</p>");  
        }
      });
 
      //console.log(roll);

      callback(null, newName);
    },
    // search for company on case text but need to add search for owner
    function caseText(newName, callback){
 
      // INSERT YOUR CUSTOM SEARCH ENGINE ID here 
      const CX = '002168785405390870885:b8oklbl8dce';
      // INSERT YOUR API KEY HERE
      const API_KEY = 'AIzaSyAx4Qf3cQeyjNXfc_Z4l0eCEMLiLE6ND18';
      // INSERT A GOOGLE REQUEST HERE
      const SEARCH = newName;

      customsearch.cse.list({ cx: CX, q: SEARCH, auth: API_KEY }, function(err, resp) {
        if (err) {
          console.log('An error occured', err);
          return;
        }
        
        // Got the response from custom search
        console.log('Result: ' + resp.searchInformation.formattedTotalResults);
        
        if (resp.items && resp.items.length > 0) {
          console.log('First result name is ' + resp.items[0].link);

          output[26] = resp.items[0].title;
          output[27] = resp.items[0].link;
        }
      });

      callback(null);
    }
    // call the first webpage in 3 seconds
  ], function (err) {
      setTimeout(function(){
        //res.end("</body></html>");
        res.render('overview', { title: 'Company Search Information', 
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
                           hail: output[16],
                           locType: output[17],
                           industry: output[18],
                           ownership: output[19],
                           yearFonded: output[20],
                           salesRange: output[21],
                           employees: output[22],
                           accredited: output[23],
                           rating: output[24],
                           summary: output[25],
                           title2: output[26],
                           link: output[27],
                           Overall_COL: output[28],
                           n_Overall_COL: output[29],
                           Health: output[30],
                           n_Health: output[31],
                           Housing: output[32],
                           n_Housing: output[33],
                           Transportation: output[34],
                           n_Transportation: output[35]
                  });
      }, 3000);     
  })
})

module.exports = router;
