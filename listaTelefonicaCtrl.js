angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http){
			$scope.app = "Lista Telefonica";
			$scope.contatos = [
				{nome:"Gabriel", sobrenome:"Oliveira", telefone:"9999-8888", data: new Date(), operadora:{nome: "Oi",codigo: 14, categoria:"Celular"}, cor: "blue"},
				{nome:"Maria",sobrenome:"Silva", telefone:"9999-5556", data: new Date(),operadora:{nome: "Nextel",codigo: 99, categoria:"Celular"}, cor: "red"},
				{nome:"Gabriela",sobrenome:"Alacantara", telefone:"9995-5888", data: new Date() ,operadora:{nome: "Vivo",codigo: 15, categoria:"Celular"}, cor: "black"},
			];
			$scope.operadoras = [
				{nome: "Oi", codigo:14, categoria: "Celular"},
				{nome: "Vivo", codigo: 15, categoria: "Celular"},
				{nome: "Tim", codigo: 41, categoria: "Celular"},
				{nome: "Nextel", codigo: 99, categoria: "Celular"},
				{nome: "Net", codigo: 99, categoria: "Fixo"},
				{nome: "Gvt", codigo: 99, categoria: "Fixo"}
			];			
			$scope.adcionarContato = function(contato){
				$scope.contatos.push(angular.copy(contato));
				delete $scope.contato; 
				$scope.contatoForm.$setPristine();
			};
			$scope.apagarContatos= function(contatos){
				$scope.contatos = contatos.filter(function (contato){
					if (!contato.selecionado) return contato;
				});
			};
			$scope.isContatoSelecionado = function (contatos){
				return contatos.some(function (contato){
					return contato.selecionado;
				});				
			};
			$scope.ordenarPor = function (campo){
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
			};
		});