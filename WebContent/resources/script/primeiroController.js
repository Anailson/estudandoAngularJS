
var app = angular.module('loja', [ 'ngRoute', 'ngResource']);

app.controller("controllerPessoa", function($scope, $resource) {
	
	//COM SPRING FRAMEWOKRD RESTFULL
	//pessoas = $resource("/pessoas/:codPessoa");
	//COM SERVLETES
	pessoas = $resource("/projetoangularjs_spring_mvc/pessoas/?codPessoa=:codPessoa");

	//BUSCA COD PESSOAS
	$scope.getPorId =  function () {

		pessoas.get({codPessoa:$scope.codPessoa}, function (data) {
			$scope.objetoPessoa = data;
		});
	};

//BUSCA TODOS
  $scope.getPorTodos = function(){
	pessoas.query(function(data){
		$scope.objetoPessoa = data;
	});

  };
//SALVAR PESSOA 
$scope.salvarPessoa = function () {
	p = new pessoas();
	p.numero = "445353";
	p.$save();
};

//DELETAR PESSOAS
$scope.deletarPessoa = function () {
     pessoas.$delete({codPessoa:"90"});
};

});







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

