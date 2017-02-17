angular.module('skills.controller',['skills.service'])
.controller('skillsCtrl',function($scope){
    
  
       var arr=['green','orange','purple','seagreen','yellowgreen','red','brown','gold','steelblue','pansy'];
       var $item=$('#skills .item');
       var $content=$('#skills .right');
       var $list=$('#skills .list');
       var len=$content.length;
       
    for(var i=0;i<35;i++){
      (function(){
        var time = setTimeout(function(){
          var r = parseInt(Math.random()*arr.length);
          $content.eq(r).css("color",arr[r]);
        },600 * (i + 1));
      
      })(i);
    }
})