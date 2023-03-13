import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d7b1bd4 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _bfbad2f0 = () => interopDefault(import('../pages/donation.vue' /* webpackChunkName: "pages/donation" */))
const _0529c25d = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _1e0eb805 = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _2cd7d9cc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _7d7b1bd4,
    name: "cart"
  }, {
    path: "/donation",
    component: _bfbad2f0,
    name: "donation"
  }, {
    path: "/products",
    component: _0529c25d,
    name: "products"
  }, {
    path: "/products/:id",
    component: _1e0eb805,
    name: "products-id"
  }, {
    path: "/",
    component: _2cd7d9cc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
