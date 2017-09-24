var jinst = require('../node_modules/jdbc/lib/jinst');
if (!jinst.isJvmCreated()) {
    jinst.addOption("-Xrs");
    jinst.setupClasspath(['./mysql-connector/mysql-connector-java-5.1.40-bin.jar']);
}
exports.JDBCConfig = {
    // Required
    url: 'jdbc:mysql://localhost',
    properties: {
        user: 'root',
        password: 'admin123'
        // Other driver supported properties can be added here as well.
    }
};
