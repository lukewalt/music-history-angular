app.config(($routeProvider) => {
    {
        $routeProvider
            .when('/', {
                controller: 'SongCtrl',
                templateUrl: '/partials/song-list.html'
            })
            .when('/song-details/:songClicked', {
                controller: 'DetailsCtrl',
                templateUrl: '/partials/song-details.html'
            })
    }
})
