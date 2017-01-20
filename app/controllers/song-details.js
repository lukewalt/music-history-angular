app.controller('DetailsCtrl', function($scope, $routeParams, dataFactory){
    console.log("Using DetailsCtrl");
    $scope.id = $routeParams.songClicked
    console.log($scope.id);

    dataFactory.getSongs().then((val)=>{
        console.log(val.songs);
        let songs = val.songs
        $scope.selectedItem = songs[$scope.id]
    }).then(dataFactory.getSecond().then((val) => {
        let moresongs = val.songs
        $scope.moreselected = moresongs[$scope.id]
    }))

    // $scope.songs =
})
