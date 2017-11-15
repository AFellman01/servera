var http = require("http");
var PORT = 7000;
function good(request, response) {
  response.end("I'm good enough, I'm smart enough, and goshdarn it people like me.");
}
var server = http.createServer(good);

server.listen(PORT, function() {
console.log("Good server is running on port " + PORT)

});

var http = require("http");
var PORT = 7500;

function evil(request, response) {

  response.end("I'm too fat. :(");
}

var server2 = http.createServer(evil);

server2.listen(PORT, function() {
  console.log("Evil Server is running on " + PORT);
});
