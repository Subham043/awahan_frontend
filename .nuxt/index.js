import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_toast_7eab31e4 from 'nuxt_plugin_toast_7eab31e4' // Source: ./toast.js (mode: 'client')
import nuxt_plugin_vuescrollto_086acb34 from 'nuxt_plugin_vuescrollto_086acb34' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_workbox_fdb23dde from 'nuxt_plugin_workbox_fdb23dde' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_8acaf1b8 from 'nuxt_plugin_metaplugin_8acaf1b8' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_817ba6d0 from 'nuxt_plugin_iconplugin_817ba6d0' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_9b0a3596 from 'nuxt_plugin_axios_9b0a3596' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_datefns_1ef56712 from 'nuxt_plugin_datefns_1ef56712' // Source: ./date-fns.js (mode: 'all')
import nuxt_plugin_fontawesome_41db3cb7 from 'nuxt_plugin_fontawesome_41db3cb7' // Source: ./fontawesome.js (mode: 'all')
import nuxt_plugin_elementui_d905880e from 'nuxt_plugin_elementui_d905880e' // Source: ../plugins/element-ui (mode: 'all')
import nuxt_plugin_zoomonhover_a38b49d8 from 'nuxt_plugin_zoomonhover_a38b49d8' // Source: ../plugins/zoom-on-hover (mode: 'client')
import nuxt_plugin_imageviewer_01887d2c from 'nuxt_plugin_imageviewer_01887d2c' // Source: ../plugins/image_viewer (mode: 'all')
import nuxt_plugin_validationprovider_53910e08 from 'nuxt_plugin_validationprovider_53910e08' // Source: ../plugins/validation-provider.js (mode: 'all')
import nuxt_plugin_publicApi_634fd7dc from 'nuxt_plugin_publicApi_634fd7dc' // Source: ../plugins/publicApi.js (mode: 'all')
import nuxt_plugin_privateApi_1da1ad6c from 'nuxt_plugin_privateApi_1da1ad6c' // Source: ../plugins/privateApi.js (mode: 'all')
import nuxt_plugin_pagination_0c55d867 from 'nuxt_plugin_pagination_0c55d867' // Source: ../plugins/pagination.js (mode: 'all')
import nuxt_plugin_vueslickcarousel_1c6345a5 from 'nuxt_plugin_vueslickcarousel_1c6345a5' // Source: ../plugins/vue-slick-carousel.js (mode: 'all')
import nuxt_plugin_auth_4b8cc95b from 'nuxt_plugin_auth_4b8cc95b' // Source: ./auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Hrudayaspandana","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},{"hid":"description","name":"description","content":""},{"name":"format-detection","content":"telephone=no"},{"httpEquiv":"X-UA-Compatible","content":"IE=edge"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_toast_7eab31e4 === 'function') {
    await nuxt_plugin_toast_7eab31e4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_086acb34 === 'function') {
    await nuxt_plugin_vuescrollto_086acb34(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_fdb23dde === 'function') {
    await nuxt_plugin_workbox_fdb23dde(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_8acaf1b8 === 'function') {
    await nuxt_plugin_metaplugin_8acaf1b8(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_817ba6d0 === 'function') {
    await nuxt_plugin_iconplugin_817ba6d0(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_9b0a3596 === 'function') {
    await nuxt_plugin_axios_9b0a3596(app.context, inject)
  }

  if (typeof nuxt_plugin_datefns_1ef56712 === 'function') {
    await nuxt_plugin_datefns_1ef56712(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_41db3cb7 === 'function') {
    await nuxt_plugin_fontawesome_41db3cb7(app.context, inject)
  }

  if (typeof nuxt_plugin_elementui_d905880e === 'function') {
    await nuxt_plugin_elementui_d905880e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_zoomonhover_a38b49d8 === 'function') {
    await nuxt_plugin_zoomonhover_a38b49d8(app.context, inject)
  }

  if (typeof nuxt_plugin_imageviewer_01887d2c === 'function') {
    await nuxt_plugin_imageviewer_01887d2c(app.context, inject)
  }

  if (typeof nuxt_plugin_validationprovider_53910e08 === 'function') {
    await nuxt_plugin_validationprovider_53910e08(app.context, inject)
  }

  if (typeof nuxt_plugin_publicApi_634fd7dc === 'function') {
    await nuxt_plugin_publicApi_634fd7dc(app.context, inject)
  }

  if (typeof nuxt_plugin_privateApi_1da1ad6c === 'function') {
    await nuxt_plugin_privateApi_1da1ad6c(app.context, inject)
  }

  if (typeof nuxt_plugin_pagination_0c55d867 === 'function') {
    await nuxt_plugin_pagination_0c55d867(app.context, inject)
  }

  if (typeof nuxt_plugin_vueslickcarousel_1c6345a5 === 'function') {
    await nuxt_plugin_vueslickcarousel_1c6345a5(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_4b8cc95b === 'function') {
    await nuxt_plugin_auth_4b8cc95b(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
