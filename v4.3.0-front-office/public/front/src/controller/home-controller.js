
stockDealUser.controller('homeCtr',['$scope', '$stateParams', '$state','homeService',
    function ( $scope, $stateParams, $state, homeService) {
       /* var Product = homeService.product;
     /*   $scope.products = productsService.all()*/
        /*$scope.addpanier = function(id){
            if(confirm('')){
                Product.add({id: id}).$promise.then(function (res) {
                    var obj = utils.findById($scope.products,id);
                    $scope.products.splice($scope.products.indexOf(obj),1);
                    toaster.pop(res.status, null,res.message);
                });
            }
            return false;

        }*/
        $scope.edit= function() {

            $state.go("panier");
        }
    }]


);