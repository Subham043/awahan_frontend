export const BannerSlideComponent = () => import('../..\\components\\BannerSlideComponent.vue' /* webpackChunkName: "components/banner-slide-component" */).then(c => wrapFunctional(c.default || c))
export const CounterLayout = () => import('../..\\components\\CounterLayout.vue' /* webpackChunkName: "components/counter-layout" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const FullScreenSlider = () => import('../..\\components\\FullScreenSlider.vue' /* webpackChunkName: "components/full-screen-slider" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LeftSlider = () => import('../..\\components\\LeftSlider.vue' /* webpackChunkName: "components/left-slider" */).then(c => wrapFunctional(c.default || c))
export const MultiSlideComponent = () => import('../..\\components\\MultiSlideComponent.vue' /* webpackChunkName: "components/multi-slide-component" */).then(c => wrapFunctional(c.default || c))
export const TwoSlideSlider = () => import('../..\\components\\TwoSlideSlider.vue' /* webpackChunkName: "components/two-slide-slider" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
