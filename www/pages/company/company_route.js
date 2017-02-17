angular.module('company.route',['company.controller'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('company',{
		url: '/company/:id',
        templateUrl: 'pages/company/company.html',
        controller: 'companyCtrl'
	})
})