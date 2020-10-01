
var app = angular.module('loja', [ 'ngRoute', 'ngResource']);
//var app = angular.module('loja', [ 'ngRoute']);
//var app = angular.module('loja', ['ngRoute']);
//var app = angular.module('loja', [ 'ngRoute', 'ngResource']);


app.controller('namesController', function($scope) {
  $scope.names = ["Email", "Anailson", "Santos"];
});



//UTILIZANDO NAS TABELAS
app.controller('pegarRespostaJson', function ($scope, $http) {
	$http.get("pegarRespostaJson").then(function (response){
		$scope.lista = response.data;
	});
	
});

//FIM ANGULAR HTTP

