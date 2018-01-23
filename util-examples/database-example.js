
var db        = require('node-any-jdbc');
var dbc       = require('./db');
const assert  = require('assert');


var sql = 'SELECT * FROM emp_info where emp_name = "Amiya"';
db.execute(dbc.mysql, sql, function(results){
  console.log(results);

});
