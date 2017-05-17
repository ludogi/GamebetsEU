var mysql = require('./../../config/config.db');
var eventsModel= {};

eventsModel.getEvents = function (callback){
  if (mysql.connection) {
        mysql.connection.query('SELECT * FROM events ORDER BY id', function(error, rows) {
            if(error){
                throw error;
            }else{
                callback(null, rows);
            }
        });
    }
}
module.exports = eventsModel;
