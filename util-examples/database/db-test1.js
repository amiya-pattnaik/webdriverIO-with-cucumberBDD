'use strict';
var JDBC = require('../../node_modules/jdbc');
var jinst = require('../../node_modules/jdbc/lib/jinst');
//var config = require('./config');

var OracleConfig = {
    //for oracle database
    //libpath:      '../../jdbc_drivers/ojdbc6.jar',
    drivername:     'oracle.jdbc.driver.OracleDriver',
    url:            'jdbc:oracle:thin:LIGER_PIANO_QA_USER/NewUserPasswordforever_2013@//ma1-ligert-ldb01.corp.apple.com:1700/ligerpt',
};

if (!jinst.isJvmCreated()) {
    jinst.addOption("-Xrs");
    jinst.setupClasspath(['../../jdbc_drivers/ojdbc6.jar']);
}

var hsqldb = new JDBC(OracleConfig);

//var hsqldbInit = false;

hsqldb.initialize(function(err) {
  if (err) {
    console.log(err);
  }
});

/*
function reserve(db, callback) {
    db.reserve((err, connobj) => {
        if (err) {
            console.log("Error reserving");
            return callback(err);
        } else {
            console.log("using connection"+connobj.conn);
            return callback(null, connobj, connobj.conn);
        }
    });
};
*/


function reserve(db, callback) {
    db.reserve(function(err, connobj) {
    // The connection returned from the pool is an object with two fields 
    // {uuid: <uuid>, conn: <Connection>} 
        if (connobj) {
            console.log("Using connection ID : " + connobj.uuid);
            // Grab the Connection for use. 
            console.log("the conn IS : "+connobj.conn);
            return callback(null, connobj, connobj.conn);
        }else {
            console.log("Error reserving");
            return callback(err);
        }
    });
};


function release(db, connobj, err, result, callback) {
    db.release(connobj, err =>  {
        if (err) {
            console.log("Error releasing");
            return callback(err);
        } else {
            return callback(result);
        }
    });
};

exports.prepare = function(db, sql, callback) {
    reserve(db, function(err, connobj, conn) {
        conn.prepareStatement(sql, (err, preparedstatement) => {
            release(db, connobj, err, preparedstatement, callback);
        });
    });
};

exports.hsqldb = function(callback) {
    if (!hsqldbInit) {
        hsqldb.initialize(err => {
            if (err) {
                console.log("Error initializing");
                return callback(err);
            } else {
                hsqldbInit = true;
                return callback(null, hsqldb);
            }
        });
    } else {
        return callback(null, hsqldb);
    }
};

/*
exports.update = function(db, sql, callback) {
    reserve(db, function(err, connobj, conn) {
        conn.createStatement (function(err, statement) {
            //TODO: UNTESTED
            if (err) {
                console.log("Error updating");
                release(db, connobj, err, null, callback);
            } else {
                statement.executeUpdate(sql, function(err, result) {
                    release(db, connobj, err, result, callback);
                });
            }
        };
    });
};
 */
//var sql   = "select content_provider_id from ITS_LABEL where username = 'external_user_test40'";
var sql   = "select * from ITS_LABEL where username = 'external_user_test40'";
function select(db, sql, callback) {
    console.log(db);
    reserve(db, function(err, connobj, conn) {
        //console.log("the connection object is : "+connobj);
        console.log("the conn is :" +conn);
        conn.createStatement(function(err, statement) {
            if (err) {
                console.log("Error selecting");
                release(db, connobj, err, null, callback);
            } else {
                statement.executeQuery(sql, function(err, result) {
                    result.toObjArray(function(err, results) {
                        if (err) {
                            console.log("Error selecting");
                            console.log(err);
                        } else {
                            console.log("the args is :");
                            console.log(results[0]);
                            callback(result);
                        }
                    });
                    release(db, connobj, err, result, callback);
                });
            }
        });
    })
};

select(hsqldb, sql, function (dbResult) {
    // console.log(dbResult); 
});
