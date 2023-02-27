<template>
    <div>
        <div class="slide-2-slider">
            <div class="health-slider p-rel">
                <template v-if="data.length>0">
                    <VueSlickCarousel v-bind="slickOptions" ref="slickBanner">
                        <div v-for="idata in data">
                        
                            <div class="health-slide-box cp" :key="idata.id">
                                <div class="health-slide-card">
                                    <div class="health-card-img p-rel">
                                        <img :src="idata.image" />
                                        <h4 class="health-img-heading">{{ idata.heading }}</h4>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </VueSlickCarousel>    
                    
                    <div class="p-rel" style="height:50px;">
                        <button type="button" data-role="none" class="slick-prev slick-arrow health-slide-arrow-left" style="" @click="prevNavClick">
                            <i class="far fa-arrow-alt-circle-left"></i>
                        </button>
                        <button type="button" data-role="none" class="slick-next slick-arrow helath-slide-arrow-right" style="" @click="nextNavClick">
                            <i class="far fa-arrow-alt-circle-right"></i>
                        </button>
                    </div>
                    

                </template>    
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "LeftSlider",
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
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: false,
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
