<template>
    <div>
        <div class="slide-2-slider">
            <div class="row p-rel">
                <template v-if="data.length>0">
                    <VueSlickCarousel v-bind="slickOptions" ref="slickBanner">
                        <div v-for="idata in data">
                        
                            <div class="col-md-12 cp" :key="idata.id">
                                <div class="inv-card">
                                    <div class="inv-card-img">
                                        <img :src="idata.image" />
                                        <div class="inv-card-content txt-center">
                                            <h3>{{idata.heading}}</h3>
                                            <div class="p5">
                                                <div class="inv-card-bootom-btn row">
                                                    <div class="col-6 inv-left-btn">
                                                        Know More
                                                    </div>
                                                    <div class="col-6 inv-right-btn">
                                                        Join Now
                                                    </div>
                                                </div>
                                            </div>
                                            
    
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </VueSlickCarousel>    

                    <button type="button" data-role="none" class="slick-prev slick-arrow two-slide-arrow-left" style="" @click="prevNavClick">
                        <i class="far fa-arrow-alt-circle-left"></i>
                    </button>
                    <button type="button" data-role="none" class="slick-next slick-arrow two-slide-arrow-right" style="" @click="nextNavClick">
                        <i class="far fa-arrow-alt-circle-right"></i>
                    </button>

                </template>    
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "TwoSlideSliderComponent",
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
                slidesToShow: 2,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
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