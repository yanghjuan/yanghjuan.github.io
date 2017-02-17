angular.module('tab.route',['tab.controller']).config(function($stateProvider,$urlRouterProvider){
     $stateProvider.state('tab',{
     	url:'/tab',
     	abstract:true,
     	controller:'Tabctrl',
     	templateUrl:'pages/tab/tab.html'

     })
})