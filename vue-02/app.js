//实例化vue对象
new Vue({
    el:"#vue-app",
    data: {
        name:"",
        age:""

    },
    methods:{
        logName:function(){
          //console.log("inserting name!")
          this.name = this.$refs.name.value;
          console.log(this.$refs.name.value);
        },
        logAge:function(){
         // console.log("inserting age!")
         this.age = this.$refs.age.value;
          console.log(this.$refs.age.value);
        }
    }
});

/*
* el: element 需要获取的元素
* data:用于数据的存储
* methods:用于存储各种方法
* data=binding : 给属性绑定对应的值
*/
