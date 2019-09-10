//实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        changeColor:false,
        changeLength:false
    },
    methods: {
      
    },
    //计算属性
    computed:{
       compClasses:function(){
        //返回一个对象
        return{
             changeColor:this.changeColor,
        changeLength:this.changeLength
        }
       }
    }
});
/*
 * el: element 需要获取的元素
 * data:用于数据的存储
 * methods:用于存储各种方法
 * data=binding : 给属性绑定对应的值
 * 每次刷新页面都会重新渲染methods里的方法，性能不好
 */