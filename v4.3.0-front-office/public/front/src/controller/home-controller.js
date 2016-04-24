
stockDealUser.controller('homeCtr',['$scope', '$stateParams', '$state','homeService',
    function ( $scope, $stateParams, $state, productsService) {
        var Product = productsService.product;
        $scope.products = productsService.all()
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!",Product);
        $scope.deleteProduct = function(id){
            if(confirm('Voulez vous vraiment suppirmer cet produit')){
                Product.delete({id: id}).$promise.then(function (res) {
                    var obj = utils.findById($scope.products,id);
                    $scope.products.splice($scope.products.indexOf(obj),1);
                    toaster.pop(res.status, null,res.message);
                });
            }
            return false;

        }
    }]
);