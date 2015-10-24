angular.module('starter.services', [])
// .factory('Auth', function ($cookieStore) {
//   var _user = $cookieStore.get('starter.user');
//   var setUser = function (user) {
//     _user = user;
//     $cookieStore.put('starter.user', _user);
//   }
//
//   return {
//     setUser: setUser,
//     isLoggedIn: function () {
//       return _user ? true : false;
//     },
//     getUser: function () {
//       return _user;
//     },
//     logout: function () {
//       $cookieStore.remove('starter.user');
//       _user = null;
//     }
//   }
// });

.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}]);
