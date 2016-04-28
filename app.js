var cheerio = require('cheerio');
var http    = require('http');
var fs      = require('fs');

var options = {
    host: 'www.dominiopublico.gov.br',
    path: '/download/texto/'
}

var $       = cheerio.load('<html><head><title>Index of /download/texto</title></head><body><h1>Index of /download/texto</h1><ul><li><a href="http://www.dominiopublico.gov.br/download/texto//download/"> Parent Directory</a></li><li><a href="http://www.dominiopublico.gov.br/download/texto/.htaccess"> .htaccess</a></li></ul></body>');

// console.log($("body ul li a"));

$("body ul li a").each(function(value, i) {
  console.log(i.attribs.href);
});
// var request = http.request(options, function (res) {
//     var data = '';
//     res.on('data', function (chunk) {
//         data += chunk;
//     });
//     res.on('end', function () {
//       var file = data;
//       // var withUrls = file.replaceAll('href="', 'href="http://www.dominiopublico.gov.br/download/texto/');
//
//
//       // fs.writeFile('books.html', withUrls, function (err) {
//       //     if (err)
//       //         return console.log(err);
//       //     console.log(data);
//       // });
//
//     });
// });
// request.on('error', function (e) {
//     console.log(e.message);
// });
// request.end();

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
