const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'articleController',
            controllerAs: 'vm'
        })
        .when('/article', {
            templateUrl: 'views/article.html',
            controller: 'articleController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        })

}
