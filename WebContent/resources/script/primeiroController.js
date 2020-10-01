
var app = angular.module('loja', [ 'ngRoute', 'ngResource']);
//var app = angular.module('loja', [ 'ngRoute']);
//var app = angular.module('loja', ['ngRoute']);
//var app = angular.module('loja', [ 'ngRoute', 'ngResource']);



//INICIO ANGULAR HTTP
app.controller('pegarResposta', function($scope, $http) {
	$scope.pegarResposta = function () {
		 $http.get("pegarResposta").then(function(response){
			 document.getElementById("resposta").value =""+response.data;
		 });
	};
  
});


