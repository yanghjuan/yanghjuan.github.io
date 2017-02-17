angular.module('route', [
	'guidePage.route',
    'tab.route',
    'basic.route',
    'skills.route',
    'exprice.route',
    'describe.route',
    'company.route'
	])

.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/guidePage');
})


