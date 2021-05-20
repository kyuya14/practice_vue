var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    message: ""
  },
  methods: {
    onclick:function() {
      this.counter += 1
    },
    clear:function() {
      this.message = ""
      console.log("event!")
    }
  }
})