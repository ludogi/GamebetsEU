var mysql = require('./../../config/config.db');

var modeloBet = {};

modeloBet.insertBet = function(bet, callback) {
  if (mysql.connection) {
    let sql = "INSERT INTO bets (user, pending, datestart, datefinish, betmatch) VALUES (" + bet.user + ", " + bet.pending + ", '" + bet.datestart + "', '" + bet.datefinish + "', " + bet.betmatch + ")";
    console.log(sql);
    mysql.connection.query(sql, function(err, rows) {
      if (err) {
        throw err;
      } else {
        callback(null, rows);
      }
    });
  }
};

modeloBet.getGame = function(callback) {
  if (mysql.connection) {
    let sql = 'SELECT * FROM Gamebets.`match`';
    console.log(sql);
    mysql.connection.query(sql, function(err, rows) {
      if (err) {
        throw err;
      } else {
        callback(null, rows);
      }
    });
  }
};

module.exports = modeloBet;
