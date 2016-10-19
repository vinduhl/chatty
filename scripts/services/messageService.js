'use strict';

angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('http://localhost:8800');
      },

      addMessage: function ( message, username ) {
        console.log(message, username);
        return $http.post('http://localhost:8800', { username: username, message: message });
      }
    };
  });
