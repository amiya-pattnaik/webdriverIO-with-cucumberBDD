

var anyDB = require('../node_modules/any-db');
var anyDBJDBC = require('../node_modules/any-db-jdbc');

var config = {
  libpath: './mysql-connector/mysql-connector-java-5.1.40-bin.jar',
  drivername: 'com.mysql.jdbc.Driver',
  uri: 'jdbc:mysql://localhost',
  user: 'user',
  password: 'password'
}

// register the JDBC driver
anyDBJDBC.registerConfig(config);
var sqlQuery   = "select period_hierarchy_name,period_number,hierarchy_date from period_hierarchy where sequence_number=16648";


var connection = anyDB.createConnection(config.uri, function (err) {
  // ...
  connection.query(sqlQuery, function (err, result) {
      console.log(result);
    });

 connection.end(function (err) {});
});
