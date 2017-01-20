app.factory('dataFactory', ($http) => {
    return {
        getSongs () {
            return $http
                .get(`/json/songs.json`)
                .then((response) => {
                    return response.data
                })
        }
    }
})
