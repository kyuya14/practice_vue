var app = new Vue({
  el:'#app',
  data: {
    // ---------
    // item:APIから取得した検索結果を格納
    // keyword:ユーザの入力した検索キー
    // message:ユーザへの表示メッセージ
    // ---------
    items:null,
    keyword:'',
    message:'',
  },
  watch: {

  },
  created: function() {
    this.keyword = 'Javascript'
    this.getAnser()
  },
  methods: {
    getAnser:function() {
      // keywordが空文字かチェック
      if(this.keyword === '') {
        this.items = null
        return
      }

      this.message = 'Loading...'
      var vm = this
      var params = {
        page:1,per_page:20,query: this.keyword
      }
      axios.get('https://qiita.com/api/v2/items',{ params })
      .then(function(response){
        console.log(response)
      })
      .catch(function(error){
        vm.message = "Error"
      })
      .finally(function(){
        vm.message = ''
      })
    }
  }
})