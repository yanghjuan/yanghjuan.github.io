angular.module('describe.route',['describe.controller'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('tab.describe',{
		url:'/describe',
		views:{
			'tab-describe':{
				controller:'describeCtrl',
     	        templateUrl:'pages/describe/describe.html'
			}
		}
	})
})