app.controller('SongCtrl', function($scope, $routeParams, $location, dataFactory){
    console.log("Using SonglistCtrl");

    dataFactory.getSongs().then((val)=>{
        $scope.songs = val.songs
        console.log($scope.songs);
    })


    $scope.hideMoreCardsButton = false

    $scope.flag = false;

    $scope.determineCard = (listItem) => {
        if ($scope.flag) {
            return true;
        } else if (listItem < 7) {
            return true;
        }
    }

    $scope.toggle = () => {
        $scope.flag = !$scope.flag;
    }
})
