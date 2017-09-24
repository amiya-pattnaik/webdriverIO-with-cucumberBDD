
//Sample example on how to use the library functions in your any.js file
require('../utilities/common-utilities.js')();  // through this statement will import all the available functions into your .js file

var _ = require('lodash');

//console.log(__dirname);

//console.log(sum(120, -20));         // sum() is available in common-liberary.js
//console.log($NODE_PATH);

excel_getTableRow(__dirname+'/sample.xlsx', 'info', 'emp_id', '101', function(results){
  console.log(results);
  //console.log(results.emp_id);
});

excel_getTableRows(__dirname+'/sample.xlsx', 'address', function(results){
  //console.log(results[1]);
});

excel_getAllSheetData(__dirname+'/sample.xlsx', function(results){
  //console.log(results);
});

//console.log(addNun(10, 15));

//console.log(' res :- ', finalResults[0].name);



var JSONObject = [{"animals": {name:"cat", name:"dog", name:"dog"}}];

//console.log(isContains(JSONObject, 'dog'));

var testCaseData = {

/*****************************************************/
/*          TEST DATA FOR TESTCASES           */
/*****************************************************/

	TC71163: 	{appName: 'App to test forms', targetProp: 'type', targetValue: 'textarea'},
	TC71165: 	{appName: 'App to test forms', targetProp: '', targetValue: ''},
	// {TC71166:	{appName: 'App to test forms', targetProp: '', targetValue: ''}},
	// {TC71167:	{appName: 'App to test forms', targetProp: '', targetValue: ''}},
	// {TC71168:	{appName: 'App to test forms', targetProp: '', targetValue: ''}},
	// {TC71169:	{appName: 'App to test forms', targetProp: '', targetValue: ''}},
	// {TC71170:	{appName: 'App to test forms', targetProp: '', targetValue: ''}},
	// {TC71171:	{appName: 'App to test forms', targetProp: '', targetValue: ''}},
	// {TC71173:	{appName: 'App to test forms', targetProp: '', targetValue: ''}},

};
//console.log(testCaseData.TC71163.appName);
