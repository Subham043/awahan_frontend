<template>
    <div>
       
        <template>
            <div class="multi-slider-main">
                <template v-if="data.length>0">
                    <VueSlickCarousel v-bind="slickOptions" ref="slickBanner">
                        <div v-for="(item, i) in data" >
                            <div class="slide-box" :key="i">
                                <div class="slide-box-collsp" >
                                    <img  :src="item.image" class="w-100 " />
                                    <div class="slide-heading-box">
                                        <h4>{{ item.title }}</h4>
                                        <p>{{ item.description }}</p>
                                    </div>
                                    <div class="middle">
                                        <div class="middle-box">
                                            <h3>{{ item.heading }}</h3>
                                            <p>
                                                {{ item.description }} 
                                                {{ item.description }} 
                                            </p>
                                        </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                            
                    </VueSlickCarousel>
                    <button type="button" data-role="none" class="slick-prev slick-arrow multi-slider-left" style="" @click="prevNavClick">
                        <i class="far fa-arrow-alt-circle-left"></i>
                    </button>
                    <button type="button" data-role="none" class="slick-next slick-arrow multi-slider-right" style="" @click="nextNavClick">
                        <i class="far fa-arrow-alt-circle-right"></i>
                    </button>
                   
                </template>
               
                   
               
                
            </div>
        </template>
    
    </div>
</template>

<script>


export default {
    name: "MultiSlideComponent",
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
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
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
.slide-box{
    padding: 0px 14px !important;
    
}

</style>