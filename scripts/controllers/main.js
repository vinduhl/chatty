'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
    });

    $scope.addMessage = function ( message, username ) {

      $scope.errorMessage = null;

      if (message && username) {
        messageService.addMessage(message, username).then(function ( response ) {
          $scope.messages = response.data;
        });
      } else {
        $scope.errorMessage = "Username and message are required!";
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
