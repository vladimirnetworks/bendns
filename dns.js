var dnsd = require('dnsd');
var http = require('http');




ip = "127.0.0.1";
port = 53;
apiserver = "xobeh.scienceontheweb.net";
apiserver_ip = "185.176.43.84";


var server = dnsd.createServer(handler)
server.zone().listen(port, ip)
console.log('bendns started on ' + ip + ":" + port)

function handler(req, res) {




    var question = res.question[0],
        hostname = question.name,
        length = hostname.length,
        ttl = Math.floor(Math.random() * 3600)



    if (question.type == 'A') {




        if (req.question[0].name == apiserver) {
            try {

                res.answer.push({
                    name: hostname,
                    type: 'A',
                    data: apiserver_ip + "",
                    'ttl': ttl
                })
                res.end()
            } catch (e) {

                console.log("error : " + e);

            }
        } else {

            console.log("req for  : " + req.question[0].name + " -> " + reverse(req.question[0].name));


            var options = {
                host: apiserver,
                path: '/nip.php?v=' + reverse(req.question[0].name)
            }
            var request = http.request(options, function(hres) {
                var datav = '';
                hres.on('data', function(chunk) {
                    datav += chunk;
                });
                hres.on('end', function() {



                    try {
                        console.log("ip : " + datav);
                        res.answer.push({
                            name: hostname,
                            type: 'A',
                            data: datav + "",
                            'ttl': ttl
                        })
                        res.end()
                    } catch (e) {

                        console.log("not found !!! : " + e);

                    }


                });
            });

            request.on('error', function(e) {});
            request.end();

        }




    }




}


function reverse(s) {

    return ((new Buffer.from(s.split("").reverse().join("").replace(/\./g, "^")).toString('base64')).replace(/=/g, "REHAlEMInTheBOx")).split("").reverse().join("")
}
