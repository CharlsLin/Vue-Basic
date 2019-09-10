//实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        a: 0,
        //a:""
        b: 0,
        //b:""
        age: 20
    },
    methods: {
        /*addToA: function() {
          console.log("AAAA");
         return this.a + this.age;
        },
        addToB: function() {
          console.log("BBBB");
         return  this.b + this.age;
        }*/
    },
    //计算属性
    computed:{
       addToA: function() {
         return this.a + this.age;
        },
        addToB: function() {
         return  this.b + this.age;
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