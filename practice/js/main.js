// Vue.component('hello-component',{
//   template: '<p>Hello </p>',
// })

var app = new Vue({
  el:'#app',
  data:{
    message:'Hello Vue!',
    msg:'こんにちは',
    url:"https://google.com",
    attribute:"href",
    TwitterObjedt: { 
      href:"https://twitter.com",
      id:31
    },
    number:0,
    x:0,
    y:0,
    event:'click',

    dataif:false,
    colors:[
      'red','yello','green'
    ],
    users: {
      'firstName':'yuya',
      'lastName':'kawase',
      'age':30,
    },
    nowdate: '',
    messageObject: "Hello vue!",
  },
  methods: {
    sayHi:function() {
      this.message = "say hello"
      return "say Hi!!"
    },
    countUp:function(times) {
      this.number += 1 * times;
    },
    changemousePosition:function(event,times){
      this.x = event.clientX * 10;
      this.y = event.clientY * 10;
    },
    keyup:function() {
      alert('アラート!');
    },
    changeif:function() {
      if(this.dataif === true) {
        this.dataif = false;
      }else{
        this.dataif = true;
      }
    },
    onclick:function() {
      var date = new Date()
      this.nowdate = date.toLocaleString();
    },
  },
})
