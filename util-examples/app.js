
//Sample example on how to use the library functions in your any.js file
var  utl  = require('../utilities/common-utilities.js');
var  dbc  = require('./db');
var _ = require('lodash');

//console.log(__dirname);

//console.log(sum(120, -20));         // sum() is available in common-liberary.js
//console.log($NODE_PATH);

utl.excel_getTableRow(__dirname+'/sample.xlsx', 'info', 'emp_id', '101', function(results){
  console.log(results);
  //console.log(results.emp_id);
});

utl.excel_getTableRows(__dirname+'/sample.xlsx', 'address', function(results){
  //console.log(results[1]);
  //then do what ever validation you to do withe results
});

utl.excel_getAllSheetData(__dirname+'/sample.xlsx', function(results){
  //console.log(results);
  //then do what ever validation you to do withe results
});

var sqlQuery = 'SELECT * FROM emp_info';

utl.db_execute(dbc.mysql, sqlQuery, function(results){
  //console.log(results);
  //then do what ever validation you to do withe results
});

var JSONObject = [{"animals": {name:"cat", name:"dog", name:"dog"}}];

//console.log(isContains(JSONObject, 'dog'));

var testCaseData = {

/*****************************************************/
/*          TEST DATA FOR TESTCASES           */
/*****************************************************/

	TC_1001: 	{appName: 'my test app', targetProp: 'type', targetValue: 'textarea'},
	TC_1002: 	{appName: 'my test app', targetProp: '', targetValue: ''},

};
//console.log(testCaseData.TC71163.appName);
