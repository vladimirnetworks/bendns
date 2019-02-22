var dnsd = require('dnsd');
var http = require('http');

function reverse(s){
	 
    return ((new Buffer(s.split("").reverse().join("").replace(/\./g, "^")).toString('base64')).replace(/=/g, "REHAlEMInTheBOx")).split("").reverse().join("")
}





 
var server = dnsd.createServer(handler)
server.zone('example.com', 'ns1.example.com', 'us@example.com', 'now', '2h', '30m', '2w', '10m').listen(53, '127.0.0.1')
console.log('runed')
 
function handler(req, res) {
	


  
 
  var question = res.question[0]
    , hostname = question.name
    , length = hostname.length
    , ttl = Math.floor(Math.random() * 3600)
	
	
 
  if(question.type == 'A') {
	  
	  if (req.question[0].name == 'dig.jsondns.org') {
		  
		  res.answer.push({name:hostname, type:'A', data:"104.27.143.146", 'ttl':ttl})
		  res.end()
		  
	  } else {
	  
	  /**/
	  
	   console.log("req2 : "+req.question[0].name+" -> "+reverse(req.question[0].name));
	  
	  var options = {
    host: 'xobeh.scienceontheweb.net',
    path: '/nip.php?v='+reverse(req.question[0].name)
}
var request = http.request(options, function (hres) {
    var datav = '';
    hres.on('data', function (chunk) {
        datav += chunk;
    });
    hres.on('end', function () {
		
        console.log("res2 : "+datav);
		
	try {	
res.answer.push({name:hostname, type:'A', data:datav+"", 'ttl':ttl})
res.end()
  } catch (e) {
	  
 console.log("not found !!! : "+e);

  }


    });
});
request.on('error', function (e) {

});
request.end();
  }

  }

 

  
}
