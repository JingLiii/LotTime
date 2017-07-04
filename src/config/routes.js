// 引入子路由
import user from '../frame/user.vue'

// 引入各个页面
import time from '../page/time.vue'
import found from '../page/found.vue'
import record from '../page/record.vue'

// 引入用户页面 _ 子页面
import userIndex from '../page/user/index.vue'
import userInfo from '../page/user/info.vue'
import userLove from '../page/user/love.vue'

// 配置路由
export default [
  // 首页 _ 直接加载time页面

  // 时光主页面
  {
    path: '/',
    component: time
  },
  // 发现页面
  {
    path: '/found',
    component: found
  },
  // 记录页面
  {
    path: '/record',
    component: record
  },
  // 用户页面
  {
    path: '/user',
    component: user,
    children: [
      {path: '/', component: userIndex},
      {path: 'info', component: userInfo},
      {path: 'love', component: userLove}
    ]
  }
]
