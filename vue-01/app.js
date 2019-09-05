//实例化vue对象
new Vue({
    el:"#vue-app",
    data: {
        name:"小白",
        job:"SE",
        website:"http://www.Baidu.com",
		websiteTag:"<a href='http://www.Baidu.com'>baidu</a>",
    	age:20,
    	x:0,
    	y:0

    },
    methods:{
    	greet:function(time){
    		return 'good '+ time+' '+this.name+ '!';
    	},

    	add:function(inc){
    		this.age += inc;
    	},

    	min:function(dec){
    		this.age -= dec;
    	},
    	updateXY:function(event){
    		this.x = event.offsetX;
    		this.y = event.offsetY;
    	},
    	stopMoving:function(event){
    		event.stopPropagation();
    	},
    	alert:function(){
    		alert("??????");
    	}
    }
});

/*
* el: element 需要获取的元素
* data:用于数据的存储
* methods:用于存储各种方法
* data=binding : 给属性绑定对应的值
*/
