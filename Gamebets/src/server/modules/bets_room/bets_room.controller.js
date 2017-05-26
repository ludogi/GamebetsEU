var modeloBet = require('./bets_room.model');


exports.getGame = function(req, res){
  modeloBet.getGame(
    function (err, game) {
      if(err){
        res.send(err);
      }
      res.json(game);
    });
};
