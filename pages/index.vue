<template>
    <div>
        <!---Start Banner Section--->
        <section class="banner">
            <div class="wrapper-1">
                <div class="slider-div-box">
                    <div class="regular slider">
                        <template v-if="banner.length > 0">
                            <VueSlickCarousel v-bind="slickOptions" ref="slickBanner">
                                <img v-for="(item, i) in banner" :key="i" :src="item.image" class="w-100" />
                            </VueSlickCarousel>
                        </template>
                        <div>
                            <button type="button" data-role="none" class="slick-prev slick-arrow" style=""
                                @click="prevNavClick">
                                <i class="fas fa-long-arrow-alt-left"></i>
                            </button>
                            <button type="button" data-role="none" class="slick-next slick-arrow" style=""
                                @click="nextNavClick">
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
                <h2><span class="heading-span-clr">About</span> <span class="heading-2nd">Aahwahan Foundation</span></h2>
                <div class="w-50">
                    <hr role="tournament6" />
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="about-img-box">
                            <img src="/images/home/aahwahan-about-1.png" class="w-100" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="about-content">
                            <!-- <h3>AAHWAHAN FOUNDATION</h3> -->
                            <p>Aahwahan - is an NGO that is involved in promoting the welfare of the economically
                                backward sections of the society by generating employment across various sectors.
                                It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate
                                poverty.
                                Our constant efforts have touched the lives of people. We believe in community development.
                                Urbanization has had an impact on the traditional economic systems in the country and has
                                shifted
                                the socioeconomic preferences.
                            </p>
                        </div>
                    </div>
                </div>

                <MultiSlideComponent :data="multi_slide_data" />
            </div>


        </section>
        <!---End About Section--->

        <!---start Book--->
        <BookComponent />
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
                        <div class="about-content about-content-2">
                            <h3>We help around the world</h3>
                            <p>Aahwahan - is an NGO that is involved in promoting the welfare of the economically
                                backward sections of the society by generating employment across various sectors.
                                It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate
                                poverty.
                                Our constant efforts have touched the lives of people. We believe in community development.
                                Urbanization has had an impact on the traditional economic systems in the country and has
                                shifted
                                the socioeconomic preferences.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="about-img-box">
                            <img src="/images/home/aahwahan-donate-1.png" class="w-100" />
                        </div>
                    </div>

                </div>

            </div>

            <div class="grey-bg mt-5">
                <div class="container">
                    <ThreeGreySlideSlider :data="two_slider_data" />
                </div>
            </div>


        </section>
        <!---End Donate Section--->

        <!---start counter section-->
        <section class="container-fluid p-unset counter-sec my-4">
            <CounterComponent :data="counter_data" />
        </section>
        <!---end counter section-->

        <!--- start health section--->
        <section class="container-fluid p-unset health-sec">
            <div class="health-bg"
                :style="`backgroundImage: url('/images/home/full-1.png'); background-position:center center; `">

                <div class="row health-row m-unset align-items-center justify-content-between">
                    <div class="col-md-5 offset-md-1 col-health">
                        <h2 class="health-heading">Health</h2>

                        <div class="health-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem
                            </p>

                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <button class="health-left b-unset">
                                        Read More
                                    </button>
                                </div>
                                <div class="col-auto">
                                    <button class="health-right b-unset">
                                        Donate Now
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="col-md-6 col-health">
                        <LeftSlider :data="left_slider_data" />
                    </div>
                </div>

            </div>
        </section>
        <!--- end health section--->

        <!---Start Achievements Section--->
        <section class="about-sec achievements">
            <div class="container">
                <h2><span class="heading-span-clr">Our</span> <span class="heading-2nd">Achievements</span></h2>
                <div class="w-50">
                    <hr role="tournament6" />
                </div>
            </div>

            <FullScreenSlider :data="full_screen_slider_data" />
        </section>
        <!---End Achievements Section--->

        <!---Start Enviroment Section--->
        <section class="about-sec environment">
            <div class="container">
                <div class="envi-heading txt-center">
                    <h2><span class="heading-2nd">Environment</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    </p>
                </div>

                <div class="row">
                    <div class="col-md-4" v-for="edata in environment" :key="edata.id">
                        <div class="env-card">
                            <div class="env-card-body">
                                <div class="env-image-card">
                                    <img :src="edata.image" />
                                </div>
                                <div class="env-card-content">
                                    <h3>{{ edata.heading }}</h3>
                                    <p>{{ edata.description }}</p>
                                </div>
                                <div class="env-card-bottom-btn">
                                    Read More
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!---End Enviroment Section--->

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
                            <img src="/images/home/aahwahan-innovation-1.png" class="w-100" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="about-content">
                            <h3>We Give The Power To Change Lives</h3>
                            <p>Aahwahan - is an NGO that is involved in promoting the welfare of the economically
                                backward sections of the society by generating employment across various sectors.
                                It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate
                                poverty.
                                Our constant efforts have touched the lives of people. We believe in community development.
                                Urbanization has had an impact on the traditional economic systems in the country and has
                                shifted
                                the socioeconomic preferences.
                            </p>
                        </div>
                    </div>
                </div>

                <MultiSlideComponent :data="multi_slide_data2" />

            </div>


        </section>
        <!---End Inovative Section--->

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

                <TwoSlideSlider :data="two_slider_data2" />


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
                            <img src="/images/home/aahwahan-blogs-1.png" class="w-100" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="about-content">
                            <h3>We Give The Power To Change Lives</h3>
                            <p>Aahwahan - is an NGO that is involved in promoting the welfare of the economically
                                backward sections of the society by generating employment across various sectors.
                                It was founded in 2009 by a team of like-minded individuals with a commitment to eradicate
                                poverty.
                                Our constant efforts have touched the lives of people. We believe in community development.
                                Urbanization has had an impact on the traditional economic systems in the country and has
                                shifted
                                the socioeconomic preferences.
                            </p>
                        </div>
                    </div>
                </div>

                <MultiSlideComponent :data="multi_slide_data3" />

            </div>


        </section>
        <!---End Blog Section--->


        <!-----start tab-video section--->

        <section class="tab-video ">
            <div class="container-fluid p-unset">
                <div class="tab-video-button-box container">
                    <div class="tab-video-btn-group">
                        <div class="col-tab-video">
                            <button class="tab-video-btn-active">Video</button>
                        </div>
                        <div class=" col-tab-video">
                            <button class="tab-video-btn">Media</button>
                        </div>
                        <div class=" col-tab-video">
                            <button class="tab-video-btn">Event</button>
                        </div>
                        <div class=" col-tab-video">
                            <button class="tab-video-btn">Images</button>
                        </div>
                        <div class=" col-tab-video">
                            <button class="tab-video-btn">birthday</button>
                        </div>
                        <div class=" col-tab-video">
                            <button class="tab-video-btn">Celebrity</button>
                        </div>

                    </div>
                </div>
                <div class="tab-video-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="video-thumbnails p-rel">
                                    <img src="/images/home/aahwahan-video-3.png">
                                    <div class="play-btn-area">
                                        <i class="fas fa-play"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="slide-2-slider">
                                    <template v-if="videos.length > 0">
                                        <VueSlickCarousel v-bind="VideoOptions" ref="VideoSlides">
                                            <template v-for="idata in videos">
                                                <div class="top-bottom-slide">
                                                    <img class="" :src="idata.image" />
                                                </div>
                                            </template>
                                        </VueSlickCarousel>
                                    </template>
                                </div>
                            </div>
                            <div class="col-md-1 p-rel">
                                <button type="button" data-role="none" class="slick-prev slick-arrow video-slide-arrow-left"
                                    style="" @click="prevNavClickVideo">
                                    <i class="fas fa-arrow-up"></i>
                                </button>
                                <button type="button" data-role="none"
                                    class="slick-next slick-arrow video-slide-arrow-right" style=""
                                    @click="nextNavClickVideo">
                                    <i class="fas fa-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-----end tab-video section--->


        <!----Start E-comm section---->

        <section class="e-comm-section">
            <div class="container">
                <div class="e-comm-heading">
                    <h2>Products</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    </p>
                </div>
            </div>
            <div class="product-slide container-fluid">
                <template v-if="products.length > 0">
                    <VueSlickCarousel v-bind="productOptions" ref="productSlides">
                        <template v-for="pdata in products">
                            <div class="product-card-main">
                                <div class="product-card p-rel" :key="pdata.id">
                                    <div class="product-img">
                                        <img :src="pdata.image">
                                    </div>
                                    <div class="product-name">
                                        <p>{{ pdata.heading }}</p>
                                        <h4> ₹ {{ pdata.price }}</h4>
                                    </div>
                                    <div class="product-bottom-btn-body">
                                        <button class="product-bottom-btn">Buy Now</button>
                                    </div>
                                </div>
                            </div>

                        </template>
                    </VueSlickCarousel>
                </template>
            </div>

        </section>

        <!----End E-comm section---->


        <!-- <div style="margin:20% 0px;"></div> -->

    </div>
</template>

<script>
import BookComponent from '~/components/BookComponent.vue';
import CounterComponent from '~/components/CounterComponent.vue';
import FullScreenSlider from '~/components/FullScreenSlider.vue';
import LeftSlider from '~/components/LeftSlider.vue';
import MultiSlideComponent from '~/components/MultiSlideComponent.vue';
import ThreeGreySlideSlider from '~/components/ThreeGreySlideSlider.vue';
import TwoSlideSlider from '~/components/TwoSlideSlider.vue';



export default {
    name: "IndexPage",
    layout: "MainPageLayout",
    data() {
        return {
            left_slider_data: [
                { id: 1, heading: '', image: "/images/home/aahwahan-full-IMAGE-health-1.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 2, heading: 'Organic Vilage', image: "/images/b2.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 3, heading: 'Lake Restoration', image: "/images/b1.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
            ],
            full_screen_slider_data: [
                { id: 1, heading: 'Tree Plantation', image: "/images/home/aahwahan-4-1.png", description: "", number:17.317, title1:"cataract Surgeries", number2:91936, title2:"spectacles supported"},
                { id: 2, heading: 'Education', image: "/images/home/aahwahan-4-2.png", description: "Lorem Ipsum has been the industry's standard dummy", number:136666, title1:"", number2:"", title2:""},
                // { id: 2, heading: 'Organic Vilage', image: "/images/home/aahwahan-4-2.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 3, heading: 'Lake Restoration', image: "/images/home/aahwahan-4-3.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 4, heading: 'Lake Restoration', image: "/images/home/aahwahan-4-4.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 5, heading: 'Tree Plantation', image: "/images/t2.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 6, heading: 'Organic Vilage', image: "/images/t3.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 7, heading: 'Lake Restoration', image: "/images/t4.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 8, heading: 'Lake Restoration', image: "/images/r1.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 9, heading: 'Tree Plantation', image: "/images/r2.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 10, heading: 'Organic Vilage', image: "/images/r3.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 11, heading: 'Lake Restoration', image: "/images/t1.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 12, heading: 'Lake Restoration', image: "/images/t2.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
            ],
            multi_slide_data: [
                { id: 1, title: 'Education', description: 'This is with the intention of offering...', heading: 'Education', image: '/images/home/aahwahan-education-1.png' },
                { id: 2, title: 'Health', description: 'It is  a mobile health van where we reach out...', heading: 'Health', image: '/images/home/aahwahan-Health-1.png' },
                { id: 3, title: 'Plantation', description: 'To restore the green healthy planet, we have been...', heading: 'Plantation', image: '/images/home/aahwahan-plantation-1.png' },
                // { id: 4, title: 'Health', description: 'Lorem Ipsum is simply dummy text of the printing', heading: 'Help us to educate', image: '/images/t1.png' },
                // { id: 5, title: 'Health', description: 'Lorem Ipsum is simply dummy text of the printing', heading: 'Help us to educate', image: '/images/t2.png' },
                // { id: 6, title: 'Health', description: 'Lorem Ipsum is simply dummy text of the printing', heading: 'Help us to educate', image: '/images/t3.png' },
            ],
            multi_slide_data2: [
                { id: 1, title: 'Health on Wheels', description: 'Lorem Ipsum is simply dummy text of the printing', heading: 'Health on Wheels', image: '/images/home/aahwahan-3of1-3.png' },
                { id: 2, title: 'Model Science Lab', description: 'Lorem Ipsum is simply dummy text of the printing', heading: 'Model Science Lab', image: '/images/home/aahwahan-3of1-2.png' },
                { id: 3, title: 'Beach Cleaning', description: 'Lorem Ipsum is simply dummy text of the printing', heading: 'Beach Cleaning', image: '/images/home/aahwahan-3of1-1.png' },
            ],
            multi_slide_data3: [
                { id: 1, title: 'Integrated Agriculture', description: 'Lorem Ipsum is simply dummy text of the printing', heading: 'Integrated Agriculture', image: '/images/home/agriculture.png' },
                { id: 2, title: 'Blanket Donation', description: 'Lorem Ipsum is simply dummy text of the printing', heading: 'Blanket Donation', image: '/images/home/blanket-donation.png' },
                { id: 3, title: 'Women Empowerment', description: 'Lorem Ipsum is simply dummy text of the printing', heading: 'Women Empowerment', image: '/images/home/women-empowerment.png' },
            ],
            counter_data: [
                { id: 1, title: 'Successfully Projects', counter: 1043 },
                { id: 2, title: 'Successfully Projects', counter: 1043 },
                { id: 3, title: 'Successfully Projects', counter: 1043 },
                { id: 4, title: 'Successfully Projects', counter: 1043 },
            ],
            two_slider_data: [
                { id: 1, heading: 'Tree Plantation', image: "/images/home/aahwahan-1of3-1.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 2, heading: 'Organic Vilage', image: "/images/home/aahwahan-1of3-2.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 3, heading: 'Lake Restoration', image: "/images/home/aahwahan-1of3-3.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 4, heading: 'Tree Plantation', image: "/images/b3.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
            ],
            two_slider_data2: [
                { id: 1, heading: 'Tree Plantation', image: "/images/home/aahwahan-getinvolved-1.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                { id: 2, heading: 'Organic Vilage', image: "/images/home/aahwahan-getinvolved-2.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                // { id: 3, heading: 'Lake Restoration', image: "/images/home/aahwahan-1of3-3.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
                // { id: 4, heading: 'Tree Plantation', image: "/images/b3.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" },
            ],
            banner: [
                { id: 1, name: "", image: "/images/home/aahwahan-banner-1.png" },
                // { id: 2, name: "", image: "/images/banner/b2.jpg" },
                // { id: 3, name: "", image: "/images/banner/b3.jpg" },
            ],
            environment: [
                { id: 1, heading: "Tree Plantation", image: "/images/home/aahwahan-2of3-3.png", description: "Education always beats the beauty and the youth. Education is so rudimentary..." },
                { id: 2, heading: "Organic Vilage", image: "/images/home/aahwahan-2of3-2.png", description: "Aahwahan family beleives 'health is a blessing' and thus taking a step..." },
                { id: 3, heading: "Lake Restoration", image: "/images/home/aahwahan-2of3-1.png", description: "Aahwahan foundation bring about innovations in the field of agriculture.." },
            ],
            videos: [
                { id: 1, heading: "Tree Plantation", image: "/images/home/aahwahan-video-1.png", },
                { id: 2, heading: "Organic Vilage", image: "/images/home/aahwahan-video-2.png", },
                { id: 3, heading: "Lake Restoration", image: "/images/vv3.jpg", },
                { id: 4, heading: "Lake Restoration", image: "/images/vv4.jpg", },
            ],
            products: [
                { id: 1, heading: "Product 1", image: "/images/home/product-1.png", price: '250' },
                { id: 2, heading: "Product 2", image: "/images/home/product-2.png", price: '450' },
                { id: 3, heading: "Product 3", image: "/images/home/product-3.png", price: '350' },
                { id: 4, heading: "Product 4", image: "/images/home/product-4.png", price: '650' },
                // { id: 5, heading: "Product 5", image: "/images/vv5.png", price: '250' },
                // { id: 6, heading: "Product 6", image: "/images/vv6.png", price: '450' },
                // { id: 7, heading: "Product 7", image: "/images/vv1.png", price: '350' },
                // { id: 8, heading: "Product 8", image: "/images/vv3.jpg", price: '650' },
            ],
            slickOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                draggable: true,
                pauseOnHover: true,
                adaptiveHeight: true,
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
            VideoOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true,
                centerMode: false,

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
                            vertical: false,
                            verticalSwiping: false,
                            centerMode: false,
                        },
                    },
                ],
            },
            productOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 3000,
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
            book_options: {
                duration: 1500,
                perspective: 1500,
                delay: 1000,
                autoplay: true,
                loop: false,
            },
            book_list: [1, 2, 3, 4, 5]
        };
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = 'https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=418950909';
            document.body.appendChild(script);
        }


    },
    methods: {
        nextNavClick() {
            this.$refs.slickBanner.next();
        },
        prevNavClick() {
            this.$refs.slickBanner.prev();
        },
        nextNavClickVideo() {
            this.$refs.VideoSlides.next();
        },
        prevNavClickVideo() {
            this.$refs.VideoSlides.prev();
        },
    },
    components: { TwoSlideSlider, MultiSlideComponent, CounterComponent, LeftSlider, FullScreenSlider, ThreeGreySlideSlider, BookComponent }
}
</script>