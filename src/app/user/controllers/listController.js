define(['user/user'],
  function(user) {
      user.controller('UserListCtrl', ['$scope',
          function($scope) {
              $scope.users = ['suhael', 'akhtar'];
          }]);
});
