app.controller('SongCtrl', function($scope, $routeParams, $location, dataFactory){
    console.log("Using SonglistCtrl");

    dataFactory.getSongs().then((val)=>{
        $scope.songs = val.songs
        console.log($scope.songs);
    }).then(dataFactory.getSecond().then((val) => {
        $scope.moresongs = val.songs
    }))

    $scope.morecards = false;
    $scope.hideMmoreSongsButton = false
    $scope.moreSongsButton = true;

    $scope.showMoreSongs = () => {
        $scope.morecards = true;
        $scope.hideMoreCardsButton = true;
        $scope.moreSongsButton = false;
    }

    $scope.hideMoreSongs = () => {
        $scope.morecards = false;
        $scope.hideMoreCardsButton = false;
        $scope.moreSongsButton = true;
    }

    $scope.seeInfo = ($event) => {
        console.log($event.currentTarget.childNodes);
        // $scope.songClicked = $event.currentTarget.
        // $location.url(`/song-details/${$scope.songClicked}`);
    }
})
