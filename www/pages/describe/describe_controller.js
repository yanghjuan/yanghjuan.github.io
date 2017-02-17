angular.module('describe.controller',['describe.service'])
.controller('describeCtrl',function($scope){
    var yd=$('#skills .dh');
	  var w=$('#skills .rt').width()-yd.width();
	  var h=$('#skills .rt').height()-yd.height();
    var xDirection = 1;
    var yDirection = 1;
    var step = 3;
    var left=yd.offset().left;
    var top=yd.offset().top;

	function getRandomColor(){
        return "rgb("+parseInt(Math.random() * 255) + ","+parseInt(Math.random() * 255)+","+parseInt(Math.random() * 255)+")";
    }
 
       render();
       function render(){
          if(left > w || left < 0){
                xDirection = -xDirection;
                yd.css({'background':getRandomColor()});
            }
            if(top > h || top<0){
                yDirection = -yDirection;
                 yd.css({'background':getRandomColor()});
            }  
              left=left+step*xDirection;
              top=top+step*yDirection;    
              yd.css({'left':left,'top':top});
              
              requestAnimationFrame(render);
       }


   

 

   // setInterval(function(){
   //   if(left > w || left < 0){
   //          xDirection = -xDirection;
   //          yd.css({'background':getRandomColor()});
   //      }
   //      if(top > h || top<0){
   //          yDirection = -yDirection;
   //           yd.css({'background':getRandomColor()});
   //      }      
   //        yd.css({'left':left,'top':top});
   //        left=left+step*xDirection;
   //        top=top+step*yDirection;
   // },20)
})