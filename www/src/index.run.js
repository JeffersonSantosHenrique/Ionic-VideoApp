(function(){
  	'use strict';

  		angular.module('VideoApp')
       
   		.run(['$rootScope', function($rootScope){

      		$rootScope.titleApp = 'Novo App';

   		}]);

	;

})()