import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import NotFound from '../components/NotFound'

Vue.use(VueRouter)// 미들웨어로 Vuerouter를 사용하겠다고 등록해줌, 그래야 사용할 수 있다.

// 라우터 생성
const router = new VueRouter({
  mode:'history',
// 브라우저에서 라우팅 할 때 hashbag모드를 사용하고 있다
// 브라우저에 히스토리 api없을 때 사용하는데, 크롬은 있으니까 api 사용 안한다는 의미로 mode:'history'작성

  routes:[
    // 선언된 순서대로 matching 시킴
    {path: '/', component: Home},
    {path: '/login', component:Login},
    {path: '*', component:NotFound}
  ]
})

export default router