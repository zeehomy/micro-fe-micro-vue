/*
 * @Author: yzh
 * @Date: 2021-02-02 11:12:11
 * @LastEditTime: 2021-02-02 14:38:05
 * @LastEditors: yzh
 * @Description: 
 * @FilePath: /micro-vue/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './public-path';

Vue.config.productionTip = false

let instance = null;

/**
 * @Description: 处理
 * @param {*} props
 * @return {*}
 * @Author: yzh
 */
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}