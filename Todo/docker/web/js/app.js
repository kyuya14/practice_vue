var app = new Vue({
  el:'#app',
  data: {
    newItem:"",
    todos: [],
  },
  methods: {
    addItem: function(event) {
      var todo = {
        item: this.newItem,
        isDone: false
      }
      if(this.newItem == "") return;
      this.todos.push(todo)
      this.newItem = ""
    },
    deleteItem: function(index) {
      this.todos.splice(index,1)
    }
  }
})