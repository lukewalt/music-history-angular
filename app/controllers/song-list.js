app.controller('SongCtrl', function($scope, $routeParams, $location, dataFactory){
    console.log("Using SonglistCtrl");
    console.log(dataFactory)    ;

    dataFactory.getSongs().then((val)=>{
        console.log(val.songs);
        $scope.songs = val.songs
    }).then(dataFactory.getSecond().then((val) => {
            console.log(val.songs);
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

    $scope.seeInfo = () => $location.url(`/song-details`)
})
