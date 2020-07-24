import Vue from 'vue'
import router from './router'
import App from './App.vue'
// 라우터만 모듈로 뺌

// 뷰 인스턴스 생성
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
  // app:루트 컴포넌트
  
  // 요런 라우터 기능을 미리 만들어 둔 것이 vue-router모듈이다.
  // h => h(App),
  // h를 통해 app컴포넌트를 그림

})
