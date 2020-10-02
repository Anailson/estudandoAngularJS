
var app = angular.module('loja', [ 'ngRoute', 'ngResource','ngAnimate']);


//CRIANDO DO SERVICE
app.factory("UserService", function(){
	var users = ['Raquel','Anailson','Ila'];//VIRIA DO BANCO DE DADOS

	return{
		all: function () {
			return users; //RETORNA TODA A LISTA
		},
		primeiro: function(){
			return users[0];//RETORNA RAQUEL
		}
	};
});

//CRIAÇÃO DO CONTROLLER
primeiroUserController = app.controller("primeiroUserController", function($scope,UserService){
	$scope.primeiro = UserService.primeiro();
});


//ATIVANDO INJEÇÃO DE DEPENDENCIA
primeiroUserController.$inject=["$scope","UserService"];//INJECT ANGULAR



//SEGUNDO CONTROLLER
todosUserController = app.controller("todosUserController", function($scope, UserService){
  $scope.todos = UserService.all();
});

//ATIVANDO A INJEÇÃO DE DEPEDENCIA
todosUserController.$inject=["$scope","UserService"];




















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

