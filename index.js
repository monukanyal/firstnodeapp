		/*---------------------Setup area----------------------------
		------------------------------------------------------------*/
			var express = require('express');
			//var mysql=require('mysql');
			//var md5 = require('md5');
			var session = require('express-session')			
			var app  = express();
			
			//app.set('view engine', 'ejs');

			//var upload=require('express-fileupload');
			var nodemailer=require('nodemailer');
			var http=require('http').Server(app);
			var io=require('socket.io')(http);

			http.listen(3000);
			//store  = new express.session.MemoryStore;
			//app.use(express.cookieParser());
		//	app.use(express.session({ secret: 'something'}));
			//var querystring = require('querystring');
			//var fs = require('fs');
			//var dt = require('./firstmod');
			// var google = require('googleapis');
			// var OAuth2 = google.auth.OAuth2;
			// const ClientId = "412272539871-t6lnudppe49cuhl9jmmlrtkocm46v5sp.apps.googleusercontent.com";
   //         const ClientSecret = "3rcPgoW61oRH0UhYavWAsKga";
   //         const RedirectionUrl = "http://127.0.0.1:3000/Google_calendar";

			app.use(upload()); //for file upload -- html form file upload imp
			//app.use('/public', express.static('vendors'));  // for static js ,css, image file path --use public/

			console.log('Server running at http://127.0.0.1:3000/');
			//var con = require('./connection');
		/*-------------------Setup area end----------------------------
				if (request.session.user) 
				{
					request.session.destroy();
					response.redirect('/firebasechat');
				}
		--------------------------------------------------------------- */

	
	/*-----------started functionality code------------------------*/

	app.get('/',function(request,response){
		console.log('hello Monu kanyal- Lets start Node ');
		//response.sendFile(__dirname+'/registration_form.html');  //no use simple html show
	 	//response.render('index',{page_title:'Home'});   
	});

	
