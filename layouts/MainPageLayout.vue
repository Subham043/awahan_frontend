<template>
  <div>
      <Header />
      <Nuxt />
      <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';


export default {
    name: "MainPageLayout",
    head() {
        return {
            link: [
                { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css", integrity: "sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp", crossorigin: "anonymous" },
            ],
        };
    },
    components: { Header, Footer }
}
</script>