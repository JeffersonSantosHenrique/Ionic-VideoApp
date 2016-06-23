(function(){
	'use strict';

	angular.module('VideoApp')
		   .config(RouteFunction);

	RouteFunction.$inject = [
		'$stateProvider',
		'$urlRouterProvider'
	];

	function RouteFunction(
		$stateProvider,
		$urlRouterProvider
	){

		$stateProvider
			.state('home', {
				url : '/home',
				templateUrl : 'src/home/home.view.html',
				controller : 'HomeController',
				controllerAs : 'vm'
			})		
			
		;

		// $urlRouterProvider.otherwise("/login");
		$urlRouterProvider.otherwise("/home");

	}

})();