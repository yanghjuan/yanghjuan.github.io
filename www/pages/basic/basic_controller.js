
// 我的页面
angular.module('basic.controller', ['basic.service'])
  .controller('basicCtrl',function($scope,$ionicActionSheet,$cordovaCamera) {
     var txt=$('#list .txt');
    
     	// 视图事件
       $scope.$on('$ionicView.enter', function (e) {
       	 for(var i=0;i<txt.length;i++){
            txt[i].style.transform='translate(0)';
        	txt[i].style.transition='transform 1s '+0.2*i+'s';
          }
        });
       $scope.$on('$ionicView.leave', function (e) {
       	   for(var i=0;i<txt.length;i++){
            txt[i].style.transform='translate(-100%)';
            txt[i].style.transition='transform 1s '+0.2*(dd.length-1-i)+'s';
           }
        });
    
    var $txts=$('#basic .txt');
    
    $txts.each(function(i){
      var len=$txts.length-1; 
      $(this).css('animationDelay',''+0.2*(len-i)+'s')
    })
     
    


    // 在每次进入控制器的时候检查localstorage是否有头像的数据，如果有，把数据赋值给图片img的src属性
    if(localStorage["touxiang"]){
      var image = document.getElementById('touxiang');
      image.src = "data:image/jpeg;base64," + localStorage["touxiang"];
    }


    // 调用摄像头功能
    $scope.func_showAction=function(){

      // 显示操作表
      $ionicActionSheet.show({
        buttons: [
          { text: '照相机' },
          { text: '图库' },
        ],
        titleText: '请选择文件源',
        cancelText: '取消',
        buttonClicked: function(index) {
          switch(index){
            case 0:func_getPicFromCamera();
              break;
            case 1:func_getPicFromPicture();
              break;
          }
          return true;
        }
      });
    }

    // 从摄像头获取图片
    var func_getPicFromCamera=function(){

      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        // 获取页面中的img对象
        var image = document.getElementById('touxiang');
        image.src = "data:image/jpeg;base64," + imageData;
        // 保存我们获取的头像数据，下次登录的时候就可以显示了吧
        localStorage["touxiang"]=imageData;
      }, function(err) {
        //$scope.AlertPopup(err);
      });
    }

    // 从图库获取图片
    var func_getPicFromPicture=function(){

      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('touxiang');
        image.src = "data:image/jpeg;base64," + imageData;
        localStorage["touxiang"]=imageData;
      }, function(err) {
        //$scope.AlertPopup(err);
      });
    }


    // 打电话
    $scope.func_callPhone=function(number){
      $window.location.href="tel:"+number;
    }

  })
