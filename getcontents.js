/**
 * Created by saurav on 1/5/17.
 */
// var http = require('http');
//
// http.request({ hostname: 'google.com' }, function(res) {
//     res.setEncoding('utf8');
//     res.on('data', function(chunk) {
//         console.log(chunk);
//     });
// }).end();

var dns = require('dns');

dns.resolve4('www.google.com', function (err, addresses) {
    if (err) throw err;

    console.log('addresses: ' + JSON.stringify(addresses));
});