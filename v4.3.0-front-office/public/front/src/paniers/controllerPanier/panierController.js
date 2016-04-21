

stockDealUser.controller('panierCtr',['$scope', '$stateParams', '$state','panierService',
    function ( $scope, $stateParams, $state, paniers) {

        $scope.paniers = paniers.get($stateParams);
        console.log("!!!!!!!!!!!!!!!panier!!!!!!!!!!",paniers);
        {
            paniers.add($scope.paniers).then(function(data){
                console.log("success",data);
            });
        };
        $scope.edit= function() {

            $state.go("panier");
        }
    }])
