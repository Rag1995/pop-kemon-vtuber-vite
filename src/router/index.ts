import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.name === 'vtuber-id') {
    const list = ['arumao', 'watagumo']
    const flag = list.indexOf(to.params.id as string) > -1
    if (flag) {
      next()
      return
    }
    next({ name: 'all' })
    return
  }
  next()
})

export default router
