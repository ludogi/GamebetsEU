(function() {
  'use strict';

  angular
    .module('cookiesService')
    .factory('cookiesService', cookies);

  cookies.$inject = ['$cookies'];

  /* @ngInject */
  function cookies($cookies) {
    return {
      SetCredentials: SetCredentials,
      ClearCredentials: ClearCredentials,
      GetCredentials: GetCredentials,
      Base64_encode: Base64_encode,
      Base64_decode: Base64_decode,
      GetCredentials_decode: GetCredentials_decode,
      GetCredentials_encode: GetCredentials_encode
    };
    //////////////////////////////////////////////////////////////////////
    function SetCredentials(users) {
      //encriptar data

      var user = Base64_encode(users.username);
      //var usertype = Base64_encode(users.usertype);
      var email = Base64_encode(users.email);
      //var name = Base64_encode(users.name)

      //almacenarlos en la cookie session
      $cookies.putObject('session',
        //{user: user, picture: users.picture, usertype: usertype, email: email, name:name},
        {
          user: user,
          picture: users.picture,
          coins: users.coins,
          email: email,
          displayName: users.displayName
        }, {
          expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
        });

    }

    function ClearCredentials() {
      $cookies.remove('session');
    }

    function GetCredentials() {
      //al cargarse la pagina por primera vez, user es undefined
      var user = $cookies.getObject('session');
      if (user) { //si no es undefined
        user = GetCredentials_decode();
      }
      return user;
    }

    function GetCredentials_encode(users) {
      var user = Base64_encode(users.user);
      //var usertype = Base64_encode(users.usertype);
      var email = Base64_encode(users.email);
      //var name = Base64_encode(users.name);

      //return {user: user, picture: users.picture, usertype: usertype, email: email, name: name};
      return {
        user: user,
        picture: users.picture,
        coins: users.coins,
        email: email,
        displayName: users.displayName
      };
    }

    function GetCredentials_decode() {
      var user = Base64_decode($cookies.getObject('session').user);
      //var usertype = Base64_decode($cookies.getObject("session").usertype);
      var email = Base64_decode($cookies.getObject('session').email);
      // var name = Base64_decode($cookies.getObject("session").name);

      // return {user: user, picture: $cookies.getObject("session").picture,
      // usertype: usertype, email:email,name: name};
      return {
        user: user,
        picture: $cookies.getObject('session').picture,
        email: email,
        coins: $cookies.getObject('session').coins,
        displayName: $cookies.getObject('session').displayName
      };
    }

    function Base64_encode(input) {
      var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      var output = '';
      var chr1, chr2, chr3 = '';
      var enc1, enc2, enc3, enc4 = '';
      var i = 0;

      try {
        do {
          //En este punto me esta dando un fallo que me bloquea la aplicación pero si codifica

          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);

          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;

          if (isNaN(chr2)) {
            enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
            enc4 = 64;
          }

          output = output +
            keyStr.charAt(enc1) +
            keyStr.charAt(enc2) +
            keyStr.charAt(enc3) +
            keyStr.charAt(enc4);
          chr1 = chr2 = chr3 = '';
          enc1 = enc2 = enc3 = enc4 = '';
        } while (i < input.length);
      } catch (err) {
        console.log('error char');
      }
      return output;
    }

    function Base64_decode(input) {
      var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      var output = '';
      var chr1, chr2, chr3 = '';
      var enc1, enc2, enc3, enc4 = '';
      var i = 0;

      // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
      var base64test = /[^A-Za-z0-9\+\/\=]/g;
      if (base64test.exec(input)) {
        window.alert('There were invalid base64 characters in the input text.\n' +
          'Valid base64 characters are A-Z, a-z, 0-9, "+", "/",and "="\n' +
          'Expect errors in decoding.');
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

      do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 !== 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 !== 64) {
          output = output + String.fromCharCode(chr3);
        }

        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
      } while (i < input.length);
      return output;
    }
  }

}());
