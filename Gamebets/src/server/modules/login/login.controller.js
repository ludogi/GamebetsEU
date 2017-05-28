var passport = require('passport');
var LoginController = {};
var modeloUsuarios = require('./login.model');
var modeloBet = require('./../bets_room/bets_room.model');

LoginController.signup = function(req, res, next) {
  passport.authenticate('local-signup', function(err, user, info) {
    if (err) {
      return res.send('err');
    }
    if (!user) {
      return res.send('Usuario ya existe');
    }
    return res.send(user);

  })(req, res, next);

};

LoginController.signin = function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    if (err) {
      return res.send('err');
    }
    if (!user) {
      return res.send(info);
    }
    return res.send(user);
  })(req, res, next);

};

LoginController.facebook = function(req, res, next) {

  passport.authenticate('facebook', {
    scope: 'email'

  });

};

LoginController.facebookCallback = function(req, res, next) {
  passport.authenticate('facebook', {
    successRedirect: '/socialsignin',
    failureRedirect: 'home'
  });

};

LoginController.twitter = function(req, res, next) {

  passport.authenticate('twitter');

};

LoginController.twitterCallback = function(req, res, next) {

  passport.authenticate('twitter', {
    successRedirect: '/socialsignin',
    failureRedirect: 'home'
  });
};

LoginController.bets = function(req, res, done) {
  //  Comprobar que devuelve un user
  modeloUsuarios.getUserbyId(req.query.id, function(rows) {
    if (rows) {
      var user = rows;
      var querycoins = parseInt(req.query.coins);
      if (rows[0].coins - querycoins >= 0) {
        modeloUsuarios.bets({
          coins: req.query.coins,
          id: req.query.id,
        }, function(result) {
          if (rows) {
            modeloBet.insertBet({
              user: req.query.id,
              pending: "true",
              datestart: "2017-08-04",
              datefinish: "2017-08-04",
              betmatch: req.query.betmatch,
            }, function(result) {
              if (rows) {
                return res.json({
                  success: true,
                  user: user,
                });

              }
            });
          }
        });
      }else{
       alert("NO TE QUEDNAN COINS");
      }

    }
  });

};

// authenticate logger
LoginController.logger = function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
};

LoginController.auth = function(req, res) {
  res.json(req.user);
};

// logout
LoginController.logout = function(req, res) {
  req.logOut();
  res.redirect('/');
  //res.send(200);
};

module.exports = LoginController;
