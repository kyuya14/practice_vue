/* Vueインスタンス作成 */
var app = new Vue({
	el: '#app',    // root templateと紐付け
  data: {
  	messsage: "hello vuejs!",
    count : 0,
    user : {
    	lastName: 'yamada',
      firstName: 'taro'
    },
    color : ['red','green','yello']
  }
})