                        var express = require('express');
			var mysql=require('mysql');
			var md5 = require('md5');
			var session = require('express-session')			
			var app  = express();
			
			app.set('view engine', 'ejs');
                        var port = process.env.PORT || 8080;
			var upload=require('express-fileupload');
			var nodemailer=require('nodemailer');
			var http=require('http').Server(app);
			var io=require('socket.io')(http);
                      // app.set('port', (process.env.PORT || 5000));
                       //http.listen(app.get('port'));
                       http.listen(port);

                       app.use(upload()); //for file upload -- html form file upload imp
                     // app.use(express.static(__dirname + '/public'));
			app.use('/public', express.static('vendors')); 

			// set the home page route
			app.get('/', function(req, res) {
				
				//res.send('Welcome Monu kanyal');
				// ejs render automatically looks in the views folder
				res.render('index');
			});

			
