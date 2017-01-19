app.controller('SongCtrl', function($scope, $routeParams, dataFactory){
    console.log("Using SonglistCtrl");

    dataFactory.getSongs().then((val)=>{
        console.log(val.songs);
        $scope.songs = val.songs
    })
})
