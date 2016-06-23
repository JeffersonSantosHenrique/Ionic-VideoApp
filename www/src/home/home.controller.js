
(function(){
	'use strict';

	angular.module('VideoApp')
		   .controller('HomeController', HomeController);

	HomeController.$inject = [
		'$log',
		'$state',
		'$ionicPopup',
		'$rootScope',
		'$ionicLoading',
		'$timeout',
		'$sce'
	];

	function HomeController(
		$log,
		$state,
		$ionicPopup,
		$rootScope,
		$ionicLoading,
		$timeout,
		$sce
	){
		
		var vm = this;
		
		//FUNCTIONS
		function _init(){				

		}

		_init();


		 

	}

})();