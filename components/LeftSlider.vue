<template>
    <div>
        <div class="slide-2-slider">
            <div class="health-slider p-rel">
                <template v-if="health.length>0">
                    <VueSlickCarousel v-bind="slickOptions" ref="slickBanner">
                        <template v-for="idata in health">
                        
                            <div class="health-slide-box cp" :key="idata.id">
                                <div class="health-slide-card">
                                    <div class="health-card-img p-rel">
                                        <img :src="idata.image" />
                                        <h4 class="health-img-heading">{{ idata.heading }}</h4>
                                    </div>
                                    
                                </div>
                            </div>
                        </template>
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

//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: "LeftSlider",
    
    data() {
        return {
            banner: [
                {id:1, name:'', image:'https://dummyimage.com/370x450/000/fff'},
                {id:2, name:'', image:'https://dummyimage.com/370x450/000/fff'},
                {id:3, name:'', image:'https://dummyimage.com/370x450/000/fff'},
                {id:1, name:'', image:'https://dummyimage.com/370x450/000/fff'},
                {id:2, name:'', image:'https://dummyimage.com/370x450/000/fff'},
                {id:3, name:'', image:'https://dummyimage.com/370x450/000/fff'},
            ],
            health:[
                {id:1, heading:'Tree Plantation',image:"/images/c1.png",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
                {id:2, heading:'Organic Vilage',image:"/images/c5.png",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
                {id:3, heading:'Lake Restoration',image:"/images/c3.png",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
                {id:4, heading:'Lake Restoration',image:"/images/c4.png",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"},
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
