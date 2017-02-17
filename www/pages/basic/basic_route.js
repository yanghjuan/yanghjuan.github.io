angular.module('basic.route',['basic.controller'])
.config(function($stateProvider, $urlRouterProvider){
	 $stateProvider.state('tab.basic',{
	 	url:'/basic',
	 	views:{
	 		'tab-basic':{
	 			controller:'basicCtrl',
     	        templateUrl:'pages/basic/basic.html'
	 		}
	 	}
	 })
})