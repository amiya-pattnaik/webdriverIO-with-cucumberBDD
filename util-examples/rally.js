
//var rally = require('../node_modules/rally');

var rally = require('../node_modules/rally');
var queryUtils = rally.util.query;
var refUtils = rally.util.ref;


    restApi = rally({
        user: 'e067343@mastercard.com', //required if no api key, defaults to process.env.RALLY_USERNAME
        pass: 'rally123', //required if no api key, defaults to process.env.RALLY_PASSWORD
        apiKey: '_u1EF4QHQpOfR1gmpyBTcmBHklLbkonkroPFAnyVKc', //preferred, required if no user/pass, defaults to process.env.RALLY_API_KEY
        apiVersion: 'v2.0', //this is the default and may be omitted
        server: 'https://rally1.rallydev.com',  //this is the default and may be omitted
        //requestOptions: {}
        //requestOptions: {
        //    headers: {
        //        //'X-RallyIntegrationName': 'My cool node.js program',  //while optional, it is good practice to
        //        'X-RallyIntegrationVendor': 'MasterCard',             //provide this header information
        //        'X-RallyIntegrationVersion': '1.0'
        //    }
            //any additional request options (proxy options, timeouts, etc.)
        //}
    });
//var refUtils = rally.util.ref;
//get a relative ref - returns /defect/1234

/*
restApi.get({
    ref: '/testcase/91144451184', //objectToRead'', //may be a ref ('/defect/1234') or an object with a _ref property
    fetch: ['FormattedID', 'Name', 'LastUpdateDate'], //fields to fetch
    //fetch: ['_refObjectName', 'ObjectID', '_CreatedAt'], //fields to fetch
    scope: {
        workspace: '/workspace/46772661387' //optional, only required if reading in non-default workspace

    },
    requestOptions: {} //optional additional options to pass through to request
  }, function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result.Object);
    }
});
*/

/*
restApi.query({
    type: 'TestCase', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    pageSize: 2, //the page size (1-200, defaults to 200)
    limit: 10, //the maximum number of results to return- enables auto paging
    order: 'Rank', //how to sort the results
    fetch: ['FormattedID', 'Name', 'ScheduleState', 'Children'], //the fields to retrieve
    query: queryUtils.where('FormattedID', '=', 'TC152507'), //optional filter
    scope: {
        workspace: '/workspace/46772661387', //specify to query entire workspace
        //project: '/project/46772666009', //specify to query a specific project
        //up: false, //true to include parent project results, false otherwise
        //down: true, //true to include child project results, false otherwise
    },
    requestOptions: {} //optional additional options to pass through to request
}, function(error, result) {
    if(error) {
        console.log(error);
    } else {
        console.log(result.Results);
    }
});

*/


//working fine
restApi.update({
  ref: '/testcase/99107605664', //may be a ref ('/defect/1234') or an object with a _ref property
  data: {
      LastVerdict: 'Pass',
      LastResult: 'Pass',
      Method: 'Automated',
      Name: 'My Third TestCase Update through Node - 1', //the data with which to update the specified object
      Build: 'MCC-Build-2.0',
      Tester: 'TestUser',
      Notes:'tested by Amiya Pattnaik',
  },
  fetch: ['FormattedID', 'Name', 'LastBuild', 'LastResult', 'Method', 'LastVerdict', 'Notes'], //fields to fetch
  scope: {
      workspace: '/workspace/46772661387' //optional, only required if updating in non-default workspace
  },
  requestOptions: {} //optional additional options to pass through to request
}, function(error, result) {
  if(error) {
      console.log(error);
  } else {
      console.log(result.Object);
  }
});



/*
var q = queryUtils.where('Iteration.ObjectID', '=', 89270707492);

restApi.query({
    type: 'hierarchicalrequirement',
    fetch: ['FormattedID', 'Name'],
    query: q,
    scope: {
        workspace: '/workspace/46772661387',
    },
}, function(error, result) {
    if(error) {
        console.log('in error block  '+error);
    } else {
        console.log('In result block '+result.Results);
    }
});
*/



/*
//working fine
restApi.del({
    ref: '/testcase/99091370752', //may be a ref ('/defect/1234') or an object with a _ref property
    scope: {
        workspace: '/workspace/46772661387' //optional, only required if deleting in non-default workspace
    },
    requestOptions: {} //optional additional options to pass through to request
}, function(error, result) {
    if(error) {
        console.log('in error block  '+error);
    } else {
        console.log('In result block '+result.Results);
    }
});
*/
