var app = new Vue({
  el:"#app",
  data: {
    message: 'Hello world',
    googleObject: {
      url:'https://google.com',
      msg:'Google'
    },
    languages:[
      'Javascript',
      'Python',
      'Ruby',
    ],
    tuggle:false,
  },
  methods: {
    onClick:function(){
      if(this.tuggle){
        this.tuggle = false
      }else{
        this.tuggle = true
      }
    }
  }
})