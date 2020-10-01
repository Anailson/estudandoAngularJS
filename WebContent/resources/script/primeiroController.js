
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


app.controller('pegarResposta2', function($scope, $http) {
	$scope.pegarResposta2 = function () {
		 $http.get("pegarResposta").then(function(response){
			 document.getElementById("resposta2").value =""+response.data;
			 document.getElementById("resposta3").value =""+response.status;
			 document.getElementById("resposta4").value =""+response.statusText;
		 });
	};
  
});


app.controller('pegarRespostaErro', function($scope, $http) {
	$scope.pegarRespostaErro = function () {
		 $http.get("pegarRespostaErro")
		 .then(function(response){//RESPOSTA BEM SUCEDIDA
			 document.getElementById("respostaerro").value =""+response.statusText;
		 }, function(response){//LIDA COM ERROS
			document.getElementById("respostaerro").value =""+response.statusText;
		 } );
	};
  
});



app.controller('pegarRespostaJson', function ($scope, $http) {
	$http.get("pegarRespostaJson").then(function (response){
		$scope.lista = response.data;
	});
	
});

//FIM ANGULAR HTTP