function config ($urlRouterProvider, $stateProvider, $locationProvider) {

  $stateProvider

    .state('layout', {
      abstract: true,
      templateUrl: 'templates/layouts/layout.html',
      controller: 'MainController as vm'
    })

    .state('layout.demo', {
      url: '/demo',
      templateUrl: 'templates/pages/demo.html',
    })

    .state('layout.usage', {
      url: '/usage',
      templateUrl: 'templates/pages/usage.html'
    })

  $urlRouterProvider.otherwise('/demo');

  if (window.location.href.indexOf('localhost') < 0) {
    $locationProvider.html5Mode(true);
  }

}

config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];
export { config };
