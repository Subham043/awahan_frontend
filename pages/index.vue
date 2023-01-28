<template>
    <div>
        <!---Start Banner Section--->
        <section class="banner">
            <div class="wrapper-1">
                <div class="slider-div-box">
                    <div class="regular slider">
                        <template v-if="banner.length>0">
                            <VueSlickCarousel v-bind="slickOptions" ref="slickBanner">
                                    <!-- <template v-for="(item, i) in banner" > -->
                                        <img  src="../static/images/banner/b1.jpg" class="w-100" />  
                                        <img  src="../static/images/banner/b2.jpg" class="w-100" />    
                                        <img  src="../static/images/banner/b3.jpg" class="w-100" />      
                                     
                                    <!-- </template> -->
                                
                            </VueSlickCarousel>
                        </template>
                        <div>
                            <button type="button" data-role="none" class="slick-prev slick-arrow" style="" @click="prevNavClick">
                                <i class="fas fa-long-arrow-alt-left"></i>
                            </button>
                            <button type="button" data-role="none" class="slick-next slick-arrow" style="" @click="nextNavClick">
                                <i class="fas fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row slider-btn-section">
                <div class="col-4 slider-btn-bg">
                    <div class="sbtn-box txt-center ">
                        Donate now
                    </div>
                </div>
                <div class="col-4 slider-btn-bg">
                    <div class="sbtn-box txt-center">
                        Join us
                    </div>
                </div>
                <div class="col-4 slider-btn-bg">
                    <div class="sbtn-box txt-center">
                        Get involved
                    </div>
                </div>
            </div>
        </section>
        <!---End Banner Section--->

        <!---Start About Section--->
        <section class="about-sec">
            <div class="container">
                <h2><span class="heading-span-clr">About</span> <span class="heading-2nd">Aahwahan</span></h2>
                <div class="w-50">
                    <hr role="tournament6" />
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="about-img-box">
                            <img src="../static/images/about/about.jpg" class="w-100" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="about-content">
                            <h3>AAHWAHAN FOUNDATION</h3>
                            <p>Aahwahan - is an NGO that is involved in promoting the welfare of the economically 
                                backward sections of the society by generating employment across various sectors. 
                                It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate poverty.
                                 Our constant efforts have touched the lives of people. We believe in community development. 
                                 Urbanization has had an impact on the traditional economic systems in the country and has shifted
                                  the socioeconomic preferences.
                            </p>
                        </div>
                    </div>
                </div>

                <MultiSlideComponent></MultiSlideComponent>
                
            </div>
           

        </section>
        <!---End About Section--->

        <!---start Book--->
        <a href="https://online.flippingbook.com/view/418950909/" class="fbo-embed" data-fbo-id="065d1636d2" data-fbo-ratio="3:2" data-fbo-lightbox="yes" data-fbo-width="100%" data-fbo-height="80vh" data-fbo-version="1" style="max-width: 100%">Types Of Education</a>
        <!-----end book-->
        
        <!---Start Donate Section--->
        <section class="donate-sec">
            <div class="container">
                <h2><span class="heading-span-clr">Donate for</span> <span class="heading-2nd">Cause</span></h2>
                <div class="w-50">
                    <hr role="tournament6" />
                </div>

                <div class="row">
                    <div class="col-md-8">
                        <div class="about-content">
                            <h3>We help around the world</h3>
                            <p>Aahwahan - is an NGO that is involved in promoting the welfare of the economically 
                                backward sections of the society by generating employment across various sectors. 
                                It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate poverty.
                                 Our constant efforts have touched the lives of people. We believe in community development. 
                                 Urbanization has had an impact on the traditional economic systems in the country and has shifted
                                  the socioeconomic preferences.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="about-img-box">
                            <img src="../static/images/about/about.jpg" class="w-100" />
                        </div>
                    </div>
                    
                </div>
                
            </div>
           

        </section>
        <!---End Donate Section--->

        <!---Start Inovative Section--->
        <section class="about-sec innovative">
            <div class="container">
                <h2><span class="heading-span-clr">Our</span> <span class="heading-2nd">Innovative Initiatives</span></h2>
                <div class="w-50">
                    <hr role="tournament6" />
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="about-img-box">
                            <img src="../static/images/about/about.jpg" class="w-100" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="about-content">
                            <h3>We Give The Power To Change Lives</h3>
                            <p>Aahwahan - is an NGO that is involved in promoting the welfare of the economically 
                                backward sections of the society by generating employment across various sectors. 
                                It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate poverty.
                                 Our constant efforts have touched the lives of people. We believe in community development. 
                                 Urbanization has had an impact on the traditional economic systems in the country and has shifted
                                  the socioeconomic preferences.
                            </p>
                        </div>
                    </div>
                </div>

                <MultiSlideComponent></MultiSlideComponent>
                
            </div>
           

        </section>
        <!---End Inovative Section--->

        <!---Start Enviroment Section--->
        <section class="about-sec environment">
            <div class="container">
                <div class="envi-heading txt-center">
                    <h2><span class="heading-2nd">Environment</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                </div>

                <div class="row">
                    <template v-for="edata in environment" >
                        <div class="col-md-4" :key="edata.id">
                            <div class="env-card">
                                <div class="env-card-body">
                                    <div class="env-image-card">
                                        <img :src="edata.image" />
                                    </div>
                                    <div class="env-card-content">
                                        <h3>{{edata.heading}}</h3>
                                        <p>{{edata.description}}</p>
                                    </div>
                                    <div class="env-card-bottom-btn">
                                        Read More
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </template>
                   
                </div>
            </div>
        </section>
        <!---End Enviroment Section--->

        <!---Start Involved Section--->
        <div class="about-sec involed">
            <div class="container">
                <div class="sec-heading">
                    <h2>
                        <span class="heading-span-clr">Get</span> <span class="heading-2nd">Involved</span>
                    </h2>
                    <div class="w-50">
                        <hr role="tournament6" />
                    </div>
                </div>

                <TwoSlideSlider></TwoSlideSlider>
                

            </div>
        </div>
        <!---End Involved Section--->

        <!---Start Blog Section--->
        <section class="about-sec blog">
            <div class="container">
                <h2><span class="heading-span-clr">Our</span> <span class="heading-2nd">Blogs</span></h2>
                <div class="w-50">
                    <hr role="tournament6" />
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="about-img-box">
                            <img src="../static/images/about/about.jpg" class="w-100" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="about-content">
                            <h3>We Give The Power To Change Lives</h3>
                            <p>Aahwahan - is an NGO that is involved in promoting the welfare of the economically 
                                backward sections of the society by generating employment across various sectors. 
                                It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate poverty.
                                 Our constant efforts have touched the lives of people. We believe in community development. 
                                 Urbanization has had an impact on the traditional economic systems in the country and has shifted
                                  the socioeconomic preferences.
                            </p>
                        </div>
                    </div>
                </div>

                <MultiSlideComponent></MultiSlideComponent>
                
            </div>
           

        </section>
        <!---End Blog Section--->  
        
        <!---Start Achievements Section--->
        <section class="about-sec achievements">
            <div class="container">
                <h2><span class="heading-span-clr">Our</span> <span class="heading-2nd">Achievements</span></h2>
                <div class="w-50">
                    <hr role="tournament6" />
                </div>
            </div>
            <div class="container-fluid">
                <!-- <FullScreenSlider></FullScreenSlider> -->
            </div>
           

        </section>
        <!---End Achievements Section--->  


        <!-- <div style="margin:20% 0px;"></div> -->
        
    </div>

</template>

<script>
import TwoSlideSlider from '~/components/TwoSlideSlider.vue';



export default {
    name: "IndexPage",
    layout: "MainPageLayout",
    data() {
        return {
            name: "",
            email: "",
            phone: "",
            ebook: false,
            event: false,
            newsletter: false,
            crossword: false,
            blog: false,
            banner: [
                { id: 1, name: "", image: "logo.png" },
                { id: 2, name: "", image: "b2.jpg" },
                { id: 3, name: "", image: "b3.jpg" },
            ],
            environment: [
                { id: 1, heading: "Tree Plantation", image: "https://dummyimage.com/390x220/000/fff", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 2, heading: "Organic Vilage", image: "https://dummyimage.com/390x220/000/fff", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 3, heading: "Lake Restoration", image: "https://dummyimage.com/390x220/000/fff", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
            ],
            involved: [
                { id: 1, heading: "Tree Plantation", image: "https://dummyimage.com/640x280/000/fff", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 2, heading: "Organic Vilage", image: "https://dummyimage.com/640x280/000/fff", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 3, heading: "Lake Restoration", image: "https://dummyimage.com/640x280/000/fff", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 4, heading: "Lake Restoration", image: "https://dummyimage.com/640x280/000/fff", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
            ],
            galleryImages: [],
            videoBannerImage: "",
            videoBannerVideo: "",
            dialogFormVisible: false,
            blogs: [],
            loading: false,
            slickOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
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
        };
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
        // this.getBlogs();
        // this.getBanners();
        // this.getVideoBanner();
        // this.getGalleryImages();


        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = 'https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=418950909';
        document.body.appendChild(script);
    },
    methods: {
        nextNavClick() {
            this.$refs.slickBanner.next();
        },
        prevNavClick() {
            this.$refs.slickBanner.prev();
        },
        async getBlogs() {
            this.loading = true;
            try {
                const response = await this.$axios.get("https://hrudayaspandana.org/blog/wp-json/wp/v2/posts");
                this.blogs = response.data;
                // console.log(this.blogs);
            }
            catch (e) {
            }
            finally {
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
                    "name": this.name,
                    "email": this.email,
                    "phone": this.phone,
                    "ebook": this.ebook,
                    "event": this.event,
                    "blog": this.blog,
                    "crossword": this.crossword,
                    "newsletter": this.newsletter,
                };
                const response = await this.$publicApi.post("/api/subscription/create", formData); // eslint-disable-line
                this.$toast.success("Subscribed successfully");
                this.name = "";
                this.email = "";
                this.phone = "";
                this.ebook = false;
                this.event = false;
                this.blog = false;
                this.crossword = false;
                this.newsletter = false;
                this.$refs.form.reset();
            }
            catch (err) {
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
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
            }
            finally {
                loading.close();
            }
        },
        async getBanners() {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$publicApi.get("/api/banner/random"); // eslint-disable-line
                this.banner = response.data.data;
            }
            catch (err) {
                // console.log(err.response);// eslint-disable-line
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
            }
            finally {
                loading.close();
            }
        },
        async getGalleryImages() {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$publicApi.get("/api/gallery-image/random"); // eslint-disable-line
                this.galleryImages = response.data.data;
            }
            catch (err) {
                // console.log(err.response);// eslint-disable-line
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
            }
            finally {
                loading.close();
            }
        },
        async getVideoBanner() {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$publicApi.get("/api/banner-video/display"); // eslint-disable-line
                this.videoBannerImage = response.data.data.image;
                this.videoBannerVideo = response.data.data.video;
            }
            catch (err) {
                // console.log(err.response);// eslint-disable-line
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
            }
            finally {
                loading.close();
            }
        },
    },
    components: { TwoSlideSlider }
}
</script>

<style scoped>
.error {
    color: red !important;
}

.viewMoreBtn {
    background: transparent !important;
    border: none !important;
    outline: none !important;
    color: #ffaa49;
    font-weight: 700;
}

.viewMoreBtn:hover {
    text-decoration: underline;
}

.tata {
    z-index: 99999999 !important;
}

#certification p {
    margin-left: 15px;
}

.moretext {
    display: none;
}

.blog2 {
    display: none;
}

.blog3 {
    display: none;
}

.pointer {
    cursor: pointer;
}

.about .about-row .col-3-about .about-card h4 a {
    color: inherit;
    text-decoration: none;
}

.text-hidden-3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    /* number of lines to show */
    line-clamp: 6;
    -webkit-box-orient: vertical;
}

.slider-div-box{
    position: relative;
}
</style>