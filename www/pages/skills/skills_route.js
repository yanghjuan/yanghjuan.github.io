angular.module('skills.route',['skills.controller'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('tab.skills',{
		url:'/skills',
		views:{
			'tab-skills':{
	 			controller:'skillsCtrl',
     	        templateUrl:'pages/skills/skills.html'
	 		}
		}
	})
})