<template>
    <div>
        <div class="category-view">
            <div class="category-image">
                <img src="https://staticinm2.ishalife.com/in/pub/media/catalog/category/3_Web.jpg"
                    alt="Clothing &amp; Accessories" title="Clothing &amp; Accessories" class="image">
            </div>
        </div>
        <section class="about-sec about-sec-product">
            <div class="container">
                <h2><span class="heading-span-clr">Our</span> <span class="heading-2nd">Products</span></h2>
                <div class="w-100">
                    <hr role="tournament6" />
                </div>
            </div>
           

        </section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-sm-auto">
                            <p class="pagination-detail">Showing <b>1</b> - <b>12</b> of <b>558</b> products</p>
                        </div>
                        <div class="col-sm-auto sort-div">
                            <label for="">
                                <b>Sort By</b>
                                <select name="" id="">
                                    <option value="">Position</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div class="row">
                        <div v-for="index in 12" :key="index" class="col-lg-3 col-md-6 col-sm-12 my-4">
                            <div class="single-product-container">
                                <div class="image-container">
                                    <img src="https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/85fd761a3357134aa12d6c1cc1673d4b/0/2/0207002_5_.jpg" alt="">
                                    <div class="image-hover-container">
                                        <div class="icon">
                                            <i class="far fa-heart"></i>
                                        </div>
                                        <div class="quick-view-div">
                                            <a href="">QUICK VIEW</a>
                                        </div>
                                    </div>
                                </div>
                                <h6>Product Name</h6>
                                <h4>&#x20B9; 360.00</h4>
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 d-flex flex-wrap justify-content-center my-3">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProductsPage",
    layout: "MainPageLayout",
    data() {
        return {}
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
}
</script>

<style scoped>
.single-product-container{
    position: relative;
    width: 100%;
}
.single-product-container .image-container{
    position: relative;
    width: 100%;
    overflow: hidden;
}
.single-product-container .image-container img{
    width: 100%;
    transition: all 1s ease-in-out;
}

.single-product-container .image-container .image-hover-container{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    top: 0;
    left: 0;
}

.single-product-container .image-container .image-hover-container .icon{
    padding: 10px;
}
.single-product-container .image-container .image-hover-container .quick-view-div{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 20px 0;
    background-color: #8f8f8fad;
    display: none;
    z-index: 3;
    transition: all 0.8s ease-in-out;
}
.single-product-container .image-container .image-hover-container .quick-view-div a{
    color: white;
    text-decoration: none;
}
.single-product-container:hover .image-container .image-hover-container .quick-view-div {
    display: block !important;
}
.single-product-container:hover .image-container img {
    transform: scale(1.1);
}
.single-product-container h6{
    font-weight: 400;
    padding-top: 10px;
    margin-bottom: 15px;
}

.single-product-container h4{
    font-family: 'Courier New', Courier, monospace;
}
.single-product-container button{
    background-color: #2d8094;
    width: 100%;
    outline: none;
    border: none;
    padding: 10px 0;
    color: white;
}
.page-link{
    color: #2d8094;
}
.pagination-detail{
    font-weight: normal;
    font-family: sans-serif;
    margin-bottom: 0;
}
.pagination-detail b{
    color: #2d8094;
}
.sort-div{
    font-family: sans-serif;
}
.sort-div select{
    margin-left: 10px;
    padding: 10px 3px;
    width: 160px;
    border: 2px dotted #8f8f8f;
}
.sort-div select:focus{
    outline: none;
}

.about-sec-product{
    padding-bottom: 10px;
}
</style>