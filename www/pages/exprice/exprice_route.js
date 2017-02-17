angular.module('exprice.route',['exprice.controller'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('tab.exprice',{
		url:'/exprice',
		views:{
			'tab-exprice':{
				controller:'expriceCtrl',
     	        templateUrl:'pages/exprice/exprice.html'
			}
		}
	})
})