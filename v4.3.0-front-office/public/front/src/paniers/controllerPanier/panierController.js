

stockDealUser.controller('panierCtr',['$scope', '$stateParams', '$state','panierService','$rootScope',
    function ( $scope, $stateParams, $state, paniers,$rootScope) {

     $scope.paniers = paniers.getById($rootScope.user._id)
         .then(function(data){
             console.log("service panier data ",data);
             for( var i= 0; i < data.pan.length;i++){
             paniers.getProduct(data.pan[i]._productId[i].toString()).then(function(){

             });
             }
           //  data.pan[0]._productId[0]
   //     homeService.get({_id:data._productId});
    });
        console.log("!!!!!!!!!!!!!!!panier!!!!!!!!!!",$rootScope.user);
            {
               /* paniers.add($scope.paniers).then(function (data) {
                    console.log("success", data);
                });*/
            };
        $scope.edit= function() {
            panierService.add($scope.product);
            $state.go("panier");
        }
    }])
