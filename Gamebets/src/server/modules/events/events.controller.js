var events = require('./events.model');

exports.getEvents = function(req, res){
  events.getEvents(
    function (err, events) {
      if(err){
        res.send(err);
      }
      res.json(events);
    });
};
