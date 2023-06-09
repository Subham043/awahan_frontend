<template>
    <div>
        <div class="slide-2-slider py-5">
            <div class="row p-rel">
                <template v-if="data.length>0">
                    <VueSlickCarousel v-bind="slickOptions" ref="slickBanner">
                        <div v-for="idata in data">
                        
                            <div class="col-md-12 cp" :key="idata.id">
                                <div class="inv-card inv-card-hieght-less bg-light inv-card-radius">
                                    <div class="inv-card-img">
                                        <div class="p-3">
                                            <img :src="idata.image" class="inv-card-radius" />
                                        </div>
                                        <div class="inv-card-">
                                            <div class="p-2 txt-center">
                                                <h3>{{idata.heading}}</h3>
                                            </div>
                                            <div class=" px-3 text-justify">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores praesentium eveniet accusantium laudantium voluptate expedita quos a. Explicabo dolorem nemo odit perspiciatis dolores maxime laudantium <a class="read-more" href="#">Read more...</a></p>
                                            </div>
                                            <div class="p5">
                                                <div class="inv-card-bootom-btn secondary-type-btn row justify-content-center align-items-center box-size">
                                                    <div class="col-6 inv-left-btn h-100">
                                                        Goal<br/><h5>&#x20B9; 1200000</h5>
                                                    </div>
                                                    <div class="col-6 inv-right-btn h-100 d-grid place-item-center">
                                                        Donate Now
                                                    </div>
                                                </div>
                                            </div>
                                            
    
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </VueSlickCarousel>    

                    <button type="button" data-role="none" class="slick-prev slick-arrow two-slide-arrow-left arrow-left-min" style="" @click="prevNavClick">
                        <i class="far fa-arrow-alt-circle-left"></i>
                    </button>
                    <button type="button" data-role="none" class="slick-next slick-arrow two-slide-arrow-right arrow-right-min" style="" @click="nextNavClick">
                        <i class="far fa-arrow-alt-circle-right"></i>
                    </button>

                </template>    
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "ThreeGreySlideSliderComponent",
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
                slidesToScroll: 1,
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

<style scoped>
.inv-card-radius{
    border-radius: 15px;
}
.secondary-type-btn{
    position: relative;
}
.inv-card-hieght-less{
    height: auto;
}
.text-justify{
    text-align: left;
}
.box-size{
    box-sizing: border-box;
    height: 80px;
}
.place-item-center{
    place-items: center;
}
.arrow-left-min{
    left: -30px;
    background-color: rgba(0, 0, 0, 0.58);
    color: white;
}
.arrow-right-min{
    right: -30px;
    background-color: rgba(0, 0, 0, 0.58);
    color: white;
}
.read-more{
    color: #3593aa;
    text-decoration: none;
}
</style>