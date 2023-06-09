import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fac2d20e = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _baf0ca62 = () => interopDefault(import('../pages/change-password.vue' /* webpackChunkName: "pages/change-password" */))
const _5b4b91eb = () => interopDefault(import('../pages/donation.vue' /* webpackChunkName: "pages/donation" */))
const _3148a025 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _4d42c7fe = () => interopDefault(import('../pages/orders.vue' /* webpackChunkName: "pages/orders" */))
const _19193100 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _0b8b6e9e = () => interopDefault(import('../pages/wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _48956c30 = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _d1ff5d6e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _fac2d20e,
    name: "cart"
  }, {
    path: "/change-password",
    component: _baf0ca62,
    name: "change-password"
  }, {
    path: "/donation",
    component: _5b4b91eb,
    name: "donation"
  }, {
    path: "/my-account",
    component: _3148a025,
    name: "my-account"
  }, {
    path: "/orders",
    component: _4d42c7fe,
    name: "orders"
  }, {
    path: "/products",
    component: _19193100,
    name: "products"
  }, {
    path: "/wishlist",
    component: _0b8b6e9e,
    name: "wishlist"
  }, {
    path: "/products/:id",
    component: _48956c30,
    name: "products-id"
  }, {
    path: "/",
    component: _d1ff5d6e,
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
