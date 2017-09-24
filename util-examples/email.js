
//Sample example on how to use the library functions in your any.js file
require('../test/library/common-liberary.js')();  // through this statement will import all the available functions into your .js file

//console.log(__dirname);
//host:	"smtp.outlook.mastercard.com", //webmail.mastercard.com/ews/exchange.asmx,
//smtp: "88834a34-f129-48bf-a318-e2f5b4233248@mastercard.com",

//var email 	= require("../node_modules/emailjs");

var api_key = 'key-88834a34-f129-48bf-a318-e2f5b4233248';
var domain = 'outlook.mastercard.com';
var mailgun = require('../node_modules/mailgun-js')({apiKey: api_key, domain: domain});

var data = {
  from: 'Excited User <amiya.pattnaik@mastercard.com>',
  to: 'amiya.pattnaik@mastercard.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  if(error){
    console.log(error);
  }else{
    console.log(body);
  }
});
