
stockDealUser.factory('panierService',['$resource','API','$q','$http', function($resource,API,$q,$http){
    var Panier = $resource(API.frontApi + '/panier/:_id',null,{
        'update': {method: 'PUT', params: {_id: '@_id'}}
    });

        var factory = {};
        factory.all = function(){
            return Panier.query();
        }
        factory.get = function(id){
            return Panier.get(id);
        }
        factory.panier = Panier;



        factory.add =function(panier) {

            var deferred = $q.defer();
            $http.post(API.frontApi + '/panier', panier)
                .success(function (data) {
                    deferred.resolve(data);
                }).error(function (err) {
                console.log("factory.addPanier error:::", err);
                deferred.reject(err);
            })
            return deferred.promise;
        }
        return factory;
    }]);

