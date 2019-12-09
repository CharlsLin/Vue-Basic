
var app1 = new Vue({
  el: '#app-1',
  data: {
    message: '打个招呼8：Hello Vue!'
  }
})

var app2 = new Vue({
　el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
　el: '#app-3',
  data: {
    seen: true
    /*seen: false*/
  }

})

var app4 = new Vue({ 
	el:'#app-4',
	data:{
		todos :
		[{text:'在🐎？'},
	{text:'v👴'},
	{text:'50'}
			]
	}
})

var app5= new Vue({ 
	el:'#app-5',
	data:{
		todos :
		[{hi:'在🐎？'},
	{do:'v👴'},
	{money:'50'}
			]
	}
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: '狗粮'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})



var app7 = new Vue({
  el: '#app-7',
  data: {
    message: '随便输入试试'
  }
})
