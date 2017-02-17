angular.module('company.service',[])
.factory('companyFty',function(){

	
    var list1={
    	resp:[{
		    id: 1,
		    text: '首页的导航栏制作',
	        },{
		    id: 2,
		    text: '轮播图、手风琴、优惠活动页制作',
	        },{
		    id: 3,
		    text: '应用jquery插件完成表单的验证与提交，实现登录注册功能',
	        },{
		    id: 4,
		    text: '参与公司网站的升级迭代，负责部分新模块页面的开发',
	        },{
		    id: 5,
		    text: '配合团队进行浏览器兼容性的优化和性能优化工作',
        }],
    	desc:[{
    		id: 1,
		    text: '使用HTML和CSS，编写符合W3C标准的网页',
	        },{id: 2,
		    text: '使用jquery、css3完成一些动画效果',
	        },{id: 3,
		    text: '使用lazyLoad实现懒加载，提高用户体验',
	        },{id: 4,
		    text: '使用seajs是实现模块化开发',
	        },{id: 5,
		    text: '通过ajax实现页面和服务器的异步交互，填充数据',
	        },{id: 6,
		    text: '项目后期的维护与更新',
	        }]
    }

    var list2={
    	resp:[{
		    id: 1,
		    text: '移动web的轮播图和导航制作',
	        },{
		    id: 2,
		    text: '移动web的导航的各个分页',
	        },{
		    id: 3,
		    text: '采用流式布局进行移动web端开发',
	        }],
    	desc:[{
    		id: 1,
		    text: '利用div+css完成静态主页面',
	        },{id: 2,
		    text: '使用Zepto、Swiper、anmaite.css、css3实现页面特效',
	        },{id: 3,
		    text: '使用seajs进行模块化开发',
	        },{id: 4,
		    text: '使用Ajax，完成项目的增删改查功能',
	        },{id: 5,
		    text: '对网页代码进行优化和改进，负责页面更新升级',
	        }]
    }

    var list3={
    	resp:[{
		    id: 1,
		    text: '页面的搭建',
	        },{
		    id: 2,
		    text: '二级页面的内容分类设计',
	        },{
		    id: 3,
		    text: '各个分类详情的搭建',
	        }],
    	desc:[{
    		id: 1,
		    text: '使用HTML+CSS完成页面整体布局',
	        },{id: 2,
		    text: '使用template模板引擎实现动态渲染页面',
	        },{id: 3,
		    text: '使用ajax技术获取后台数据，实现页面数据展示',
	        },{id: 4,
		    text: '运用了CSS3的媒体查询，适应多种设备',
	        },{id: 5,
		    text: '使用javascript、css3实现页面特效',
	        }]
    }
   return {
   	  list1: function() {
        return list1
      },
      list2: function() {
        return list2
      },
      list3: function() {
        return list3
      }
   }

})