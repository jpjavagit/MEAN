var app = angular.module('app',[]);

app.controller("ctrl", function($scope, $http){

  $scope.item = {};

  $scope.getItens = function(){
    $http.get('/getitens')
      .then(function(itens){
        $scope.itens = itens.data;
      });
  };

  $scope.save = function(){
    console.log($scope.item.unitValue);
    $http.post('/save', $scope.item).then(
      $scope.itens = [
        $scope.getItens()
      ]
    )
    $scope.item={};
  };
});
