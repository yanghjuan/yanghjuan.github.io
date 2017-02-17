
angular.module('guidePage.controller',['guidePage.service'])
.controller('guidePageCtrl',function($scope,$state){

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
   
    $scope.func_goHome=function(){
       $state.go('tab.basic'); 
    }
})