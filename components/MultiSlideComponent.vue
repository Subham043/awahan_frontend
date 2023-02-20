<template>
    <div>
       
        <template>
            <div class="multi-slider-main">
                <template v-if="banner.length>0">
                    <VueSlickCarousel v-bind="slickOptions" ref="slickBanner">
                            <template v-for="(item, i) in banner" >
                                <div class="slide-box" :key="i">
                                    <div class="slide-box-collsp" >
                                        <img  :src="item.image" class="w-100 " />
                                        <div class="slide-heading-box">
                                            <h4>Health</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                                        </div>
                                        <div class="middle">
                                            <div class="middle-box">
                                                <h3>Help us to educate</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing. 
                                                   Lorem Ipsum is simply dummy text of the printing.
                                                </p>
                                            </div>
                                          </div>
                                    </div>
                                </div>
                               
                                
                            </template>
                            
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
    name: "MultiSlide",
    
    data() {
        return {
            banner: [
                {id:1, name:'', image:'/images/r1.png'},
                {id:2, name:'', image:'/images/r2.png'},
                {id:3, name:'', image:'/images/r3.png'},
                {id:1, name:'', image:'/images/t1.png'},
                {id:2, name:'', image:'/images/t2.png'},
                {id:3, name:'', image:'/images/t3.png'},
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
            this.$refs.slickBanner.next()
        },
        prevNavClick() {
            this.$refs.slickBanner.prev()
        },
        async getBlogs(){
            this.loading = true;
            try{
                const response = await this.$axios.get('https://hrudayaspandana.org/blog/wp-json/wp/v2/posts');
                this.blogs = response.data
                // console.log(this.blogs);
            }catch(e){
                
            }finally{
                this.loading = false;
            }
        },
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const formData = {
                    'name': this.name,
                    'email': this.email,
                    'phone': this.phone,
                    'ebook': this.ebook,
                    'event': this.event,
                    'blog': this.blog,
                    'crossword': this.crossword,
                    'newsletter': this.newsletter,
                }
                const response = await this.$publicApi.post('/api/subscription/create', formData); // eslint-disable-line
                this.$toast.success('Subscribed successfully')
                this.name=''
                this.email=''
                this.phone=''
                this.ebook=false
                this.event=false
                this.blog=false
                this.crossword=false
                this.newsletter=false
                this.$refs.form.reset();
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                    name: err?.response?.data?.errors?.name,
                    email: err?.response?.data?.errors?.email,
                    phone: err?.response?.data?.errors?.phone,
                    ebook: err?.response?.data?.errors?.ebook,
                    event: err?.response?.data?.errors?.event,
                    blog: err?.response?.data?.errors?.blog,
                    crossword: err?.response?.data?.errors?.crossword,
                    newsletter: err?.response?.data?.errors?.newsletter,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            }finally{
                loading.close()
            }
        },
        async getBanners() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$publicApi.get('/api/banner/random'); // eslint-disable-line
                this.banner = response.data.data
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            }finally{
                loading.close()
            }
        },
        async getGalleryImages() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$publicApi.get('/api/gallery-image/random'); // eslint-disable-line
                this.galleryImages = response.data.data
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            }finally{
                loading.close()
            }
        },
        async getVideoBanner() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$publicApi.get('/api/banner-video/display'); // eslint-disable-line
                this.videoBannerImage = response.data.data.image
                this.videoBannerVideo = response.data.data.video
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            }finally{
                loading.close()
            }
        },
    }
}

</script>

<style scoped>
.slide-box{
    padding: 0px 14px !important;
    
}

</style>