function MainController($scope, $http) {
    $http.get('/assets/data/images.json').then((res) => {
        $scope.gallery = res.data.images;
    });
}

MainController.$inject = ['$scope', '$http'];
export { MainController };
