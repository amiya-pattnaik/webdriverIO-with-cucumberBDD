//var dbCon           = require('/Users/ctsuser1/Desktop/Amiya/Framework/GBIFAT-F/framework-folder/jdbc-drivers/dataConfig');
//var fLib            = require('/Users/ctsuser1/Desktop/Amiya/Framework/GBIFAT-F/framework-folder/lib/libFun');
'use strict';

var JDBC = require('../../node_modules/jdbc');
var jinst = require('../../node_modules/jdbc/lib/jinst');


if (!jinst.isJvmCreated()) {
  jinst.addOption("-Xrs");
  jinst.setupClasspath(['../../jdbc_drivers/ojdbc6.jar',
                        '../../jdbc_drivers/vertica-jdk5-6.1.0-0.jar',
                        //'./drivers/derbyclient.jar',
                        //'./drivers/derbytools.jar'
                        ]);
}




//Vertica database info for LigerT DB
var verticaConfig = {

    //libpath:      '../../jdbc_drivers/vertica-jdk5-6.1.0-0.jar',
    drivername:   'com.vertica.jdbc.Driver',
    url:          "jdbc:vertica://ma1-ligert-lvdb01.corp.apple.com/?user=liger_web_user&password=TykaA78WpT",
};

var sqlQuery_vertica  = "select * from liger_igc.md_dashboard_dt;";

var OracleConfig = {
	//for oracle database
  	//libpath: 		'../../jdbc_drivers/ojdbc6.jar',
  	drivername: 	'oracle.jdbc.driver.OracleDriver',
  	url: 			   'jdbc:oracle:thin:LIGER_PIANO_QA_USER/NewUserPasswordforever_2013@//ma1-ligert-ldb01.corp.apple.com:1700/ligerpt',
};

var sqlQuery_oracle   = "select content_provider_id from ITS_LABEL where username = 'external_user_test30'";



var hsqldb = new JDBC(OracleConfig);

hsqldb.initialize(function(err) {
  if (err) {
    console.log("run time error is : " +err);
  }
//});

//console.log(hsqldb);



/*
db_execute( function (dbResult) {
                    console.log(dbResult); 
});
*/


                        
                        
//function db_execute(callback){

  
  hsqldb.reserve(function(err, connObj) {
  // The connection returned from the pool is an object with two fields
  // {uuid: <uuid>, conn: <Connection>}
  if (connObj) {
    console.log("Using connection: " + connObj.uuid);
    // Grab the Connection for use.
    var conn = connObj.conn;
	
	//function(callback) {
        // CREATE SQL.
        // Select statement example. 
conn.createStatement(function(err, statement) {
  if (err) {
    callback(err);
  } else {
    console.log("the statement is : " +statement);
    statement.executeQuery(sqlQuery_oracle, function(err, resultset) {
      if (err) {
        callback(err)
      } else {
        // Convert the result set to an object array. 
        console.log("the result set is : " +resultset);
        resultset.toObjArray(function(err, results) {
          if (results.length > 0) {
            console.log("ID: " + results[0].ID);
          }
          (null, resultset);
        });
      }
    });
  }
});
}
});
//};


});


