angular.module('company.controller',['company.service'])
.controller('companyCtrl',function($scope,$ionicHistory,$stateParams,companyFty){
   $scope.goBack=function(){
   	 $ionicHistory.goBack()
   };
   $scope.list1 = companyFty.list1();
   $scope.list2 = companyFty.list2();
   $scope.list3 = companyFty.list3();
   if($stateParams.id==1){
     	console.log($scope.list1);
     	$scope.desc=$scope.list1.desc;
     	$scope.resp=$scope.list1.resp;

   }else if($stateParams.id==2){
       	console.log($scope.list2);
       	$scope.desc=$scope.list2.desc;
     	$scope.resp=$scope.list2.resp;

   }else{
       console.log($scope.list3);
       $scope.desc=$scope.list3.desc;
       $scope.resp=$scope.list3.resp;

   }
   
})