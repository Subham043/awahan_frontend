<template>
    <div>

        <div class="upper-top">
            <div class="row">
                <div class="col-md-6">
                    <div class="top-left-section">
                        <div class="left-section-text">
                            Career
                        </div>
                        <div class="right-section-text">
                            Volunteer Registration
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="top-right-section">
                        <div class="oneline-div">
                            <NuxtLink to="/donation" class="child-oneline right-brd">
                                Donation
                            </NuxtLink>
                            <div class="child-oneline right-brd">
                                login
                            </div>
                            <div class="child-oneline">
                                <i class="fab fa-youtube"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                            </div>
                            <div class="child-oneline ">
                                Contact Us
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="topnav" id="myTopnav">
            <NuxtLink to="/" class="active">Home</NuxtLink>
            <a href="#news">Covid-19</a>
            <a href="#contact">Our Journey</a>
            <a href="#contact">Our Programs</a>
            <a href="#about">Our Achievements</a>
            <NuxtLink class="image-style" to="/"><img src="~/static/images/home/logo-1.png" width="100%"/></NuxtLink>
            <NuxtLink to="/products">Products</NuxtLink>
            <a href="#about">Aahwahan Patrika</a>
            <a href="#about">Media Presence</a>
            <a href="#about">Our Forum</a>
            <a href="#about">Blogs</a>

            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i>
            </a>
        </div>

          <!-- <img :scr="url2" style="width:100px" /> -->

          
        
            

    </div>
	
</template>

<script>
export default {
	name: 'HeaderComponent',
    data() {
      return {
        activeIndex: '1',
        logo:'~/static/images/logo/logo.png'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
.image-style{
    width: 18%;
    padding: 0px !important;
}
</style>