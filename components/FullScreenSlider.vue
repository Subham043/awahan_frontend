<template>
    <div>
        <div class="container-fluid">
            <div class="slide-2-slider p-rel">
                <template v-if="data.length>0">
                    <VueSlickCarousel v-bind="slickOptions" ref="slickBanner">
                        <div v-for="idata in data">
                        
                            <div class="achi-slide " :style="`backgroundImage: url( ${idata.image} )`"  :key="idata.id">
                                <div class="slide-dex p-rel"  >
                                    <div class="achi-main-box">
                                        <div class="achi-heading">
                                            {{ idata.heading }}
                                        </div>
                                        <div class="achi-desc">
                                            {{ idata.description }}
                                        </div>
                                    </div>

                                    <div class="achi-bottom-btn-box">
                                        <div class="achi-btn">
                                            Read More
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                
                            </div>
                          
                        </div>
                    </VueSlickCarousel>    

                    <button type="button" data-role="none" class="slick-prev slick-arrow achi-arrow-left" style="" @click="prevNavClick">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                    <button type="button" data-role="none" class="slick-next slick-arrow achi-arrow-right" style="" @click="nextNavClick">
                        <i class="fas fa-arrow-right"></i>
                    </button>

                </template>    
            </div>
        </div>
       
    </div>
</template>

<script>


export default {
    name: "FullScreenSlider",
    props:{
        data:{
            type: Array,
            default: []
        },
    },
    data() {
        return {
            slickOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 3000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            infinite: true,
                            dots: false,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                        },
                    },
                ],
            },
        }
    },
    methods: {
        nextNavClick() {
            this.$refs.slickBanner.next()
        },
        prevNavClick() {
            this.$refs.slickBanner.prev()
        },
    }
}

</script>

<style scoped>

.container-fluid {
    padding:unset !important;
}

</style>