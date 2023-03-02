<template>
    <div>
        <div class="slide-2-slider">
            <div class="donation-detail-slide p-rel">
                <template v-if="involved.length>0">
                    <div class="don-card-top-label">
                        All Donation (35)
                    </div>
                    <VueSlickCarousel v-bind="slickOptions" ref="donationCard">
                        <div v-for="idata in involved">
                        
                            <div class="don-slide cp" :key="idata.id">
                                <div class="don-detail-card p-rel">
                                   
                                    <div class="don-detail-card-data">
                                        <h3>{{idata.heading}}</h3>
                                        <p>{{idata.description}}</p>

                                        <button class="heart-btn">DONATE NOW <span class="btn-icon-box"><i class="fas fa-heart"></i></span> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </VueSlickCarousel>    

                    <button type="button" data-role="none" class="slick-prev slick-arrow donation-card-slide-arrow-left" style="" @click="prevNavClick">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button type="button" data-role="none" class="slick-next slick-arrow donation-card-slide-arrow-right" style="" @click="nextNavClick">
                        <i class="fas fa-chevron-right"></i>
                    </button>

                </template>    
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "DonationCardSlider",
    
    data() {
        return {
           
            involved:[
                {id:1, heading:'Tree Plantation',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
                {id:2, heading:'Organic Vilage',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
                {id:3, heading:'Lake Restoration',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
                {id:4, heading:'Lake Restoration',description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
            ],
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
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo('#__nuxt', 0, { force: true })
        }
        // this.getBlogs();
        // this.getBanners();
        // this.getVideoBanner();
        // this.getGalleryImages();
    },
    methods: {
        nextNavClick() {
            this.$refs.donationCard.next()
        },
        prevNavClick() {
            this.$refs.donationCard.prev()
        },
    
       
    }
}

</script>