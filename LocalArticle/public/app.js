var stockDeal = angular.module('stockDeal',[]);
stockDeal.controller('GetPcsDetails', ['$scope', '$http', '$templateCache',
	function($scope, $http, $templateCache) {

		$scope.getPcs = function(){
			$http({
				url :'/pc',
				method:'GET'
			}).then(function successCallback(response){
					$scope.listPcs=response.data;
					var data = response.data;
					console.log(data);
					console.log(response);
				},function errorCallback(data, status, headers, config){
					console.log('can not get !!');
				})
		};

		$scope.deletePc = function(id){
			var Id = {'id':id};
			JSON.stringify(Id);
			$scope.id = Id;
			$http({
				url: '/deletePost',
				method:	'POST',
				data: $scope.id,
				headers: {'Content-Type': 'application/json'}
			}).then(function successCallback(response) {
				// this callback will be called asynchronously
				// when the response is available
				console.log('done ...');
				location.href = 'http://localhost:81/';


			}, function errorCallback(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				console.log('warning');
			})
		}
		$scope.updatePc = function(id,newPc){
			var Id = {'id':id};
			JSON.stringify(Id);
			$scope.id = Id;
			console.log(newPc);
			$http({
				url: '/pcs/'+ id+'',
				method:	'POST',
				data: newPc,
				headers: {'Content-Type': 'application/json'}
			}).then(function successCallback(response) {
				// this callback will be called asynchronously
				// when the response is available
				console.log('done ...');
				location.href = 'http://localhost:81/';


			}, function errorCallback(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				console.log('warning');
			})
		}

		$scope.addPc = function(newPc) {
			//var Id = {'id':id};
			//JSON.stringify(Id);
			console.log(newPc);
			$http({
				url: '/pcAdd',
				method: 'POST',
				data: $scope.newPc,
				headers: {'Content-Type': 'application/json'}
			}).then(function successCallback(response) {
				// this callback will be called asynchronously
				// when the response is available
				$scope.pc = response;
				console.log('done ...');
				location.href = 'http://localhost:81/';

			}, function errorCallback(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				console.log('warning');
			})

		}
	}]);

