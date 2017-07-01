var express = require('express');
			var mysql=require('mysql');
			var md5 = require('md5');
			var session = require('express-session')			
			var app  = express();
			
			app.set('view engine', 'ejs');

			var upload=require('express-fileupload');
			var nodemailer=require('nodemailer');
			var http=require('http').Server(app);
			var io=require('socket.io')(http);
     app.set('port', (process.env.PORT || 5000));
   http.listen(app.get('port'));


//app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  console.log("Node app is running at localhost:" + app.get('port'));
  response.send('Welcome Monu kanyal!');
})

// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// })
