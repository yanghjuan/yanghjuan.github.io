angular.module('guidePage.route',['guidePage.controller'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('guidePage',{
		url:'/guidePage',
		templateUrl:'pages/guidePage/guidePage.html',
		controller:'guidePageCtrl'

	})
})