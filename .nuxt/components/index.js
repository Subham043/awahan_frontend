export { default as BannerSlideComponent } from '../../components/BannerSlideComponent.vue'
export { default as CounterLayout } from '../../components/CounterLayout.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as FullScreenSlider } from '../../components/FullScreenSlider.vue'
export { default as Header } from '../../components/Header.vue'
export { default as LeftSlider } from '../../components/LeftSlider.vue'
export { default as MultiSlideComponent } from '../../components/MultiSlideComponent.vue'
export { default as TwoSlideSlider } from '../../components/TwoSlideSlider.vue'

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
