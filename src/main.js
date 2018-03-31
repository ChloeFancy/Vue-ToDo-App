import Vue from 'vue'
import App from './app.vue'


import reset from './styles/reset.css'
import main from './styles/main.less'
import todoEdit from './styles/todoEdit.less'
import todoView from './styles/todoView.less'
import todoCreate from './styles/todoCreate.less'
import popWindow from './styles/popWindow.less'

var vm1 = new Vue({
  el:"#app",
  template:'<App/>',
  components:{App}
})

