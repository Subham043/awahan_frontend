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
                <h2><span class="heading-span-clr">My</span> <span class="heading-2nd">Wishlist</span></h2>
                <div class="w-100">
                    <hr role="tournament6" />
                </div>
            </div>
        </section>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-cart">
                    <table class="table" style="width: 100%;">
                        <thead>
                            <tr class="table-primary">
                                <th scope="col">Product</th>
                                <th scope="col" class="text-center">Quantity</th>
                                <th scope="col" class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="py-4">
                                <td style="width: 50%;">
                                    <NuxtLink to="/" class="cart-container">
                                        <div class="row align-items-center">
                                            <div class="col-auto col-img">
                                                <img src="https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg" alt="">
                                            </div>
                                            <div class="col-auto col-detail">
                                                <h5>Organic Unisex T Shirt Harvest Green 11-12 yrs</h5>
                                                <p class="m-0">&#x20B9; 360 (Incl. of all taxes)</p>
                                            </div>
                                        </div>
                                    </NuxtLink>
                                </td>
                                <td style="width: 30%;" class="text-center">
                                    <div class="cart-btn-container">
                                        <div class="d-flex flex-wrap align-items-center justify-content-center">
                                            <div class="d-flex flex-wrap align-items-center">
                                                <button class="ctrl-btn">-</button>
                                                <input type="text" class="counter-label" value="1">
                                                <button class="ctrl-btn">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row" style="width: 20%;" class="text-center">
                                    <button class="cart-btn">Add To Cart</button>
                                    <button class="del-btn">Remove</button>
                                </th>
                            </tr>
                            <tr class="py-4">
                                <td style="width: 50%;">
                                    <NuxtLink to="/" class="cart-container">
                                        <div class="row align-items-center">
                                            <div class="col-auto col-img">
                                                <img src="https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg" alt="">
                                            </div>
                                            <div class="col-auto col-detail">
                                                <h5>Organic Unisex T Shirt Harvest Green 11-12 yrs</h5>
                                                <p class="m-0">&#x20B9; 360 (Incl. of all taxes)</p>
                                            </div>
                                        </div>
                                    </NuxtLink>
                                </td>
                                <td style="width: 30%;" class="text-center">
                                    <div class="cart-btn-container">
                                        <div class="d-flex flex-wrap align-items-center justify-content-center">
                                            <div class="d-flex flex-wrap align-items-center">
                                                <button class="ctrl-btn">-</button>
                                                <input type="text" class="counter-label" value="1">
                                                <button class="ctrl-btn">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row" style="width: 20%;" class="text-center">
                                    <button class="cart-btn">Add To Cart</button>
                                    <button class="del-btn">Remove</button>
                                </th>
                            </tr>
                            <tr class="py-4">
                                <td style="width: 50%;">
                                    <NuxtLink to="/" class="cart-container">
                                        <div class="row align-items-center">
                                            <div class="col-auto col-img">
                                                <img src="https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg" alt="">
                                            </div>
                                            <div class="col-auto col-detail">
                                                <h5>Organic Unisex T Shirt Harvest Green 11-12 yrs</h5>
                                                <p class="m-0">&#x20B9; 360 (Incl. of all taxes)</p>
                                            </div>
                                        </div>
                                    </NuxtLink>
                                </td>
                                <td style="width: 30%;" class="text-center">
                                    <div class="cart-btn-container">
                                        <div class="d-flex flex-wrap align-items-center justify-content-center">
                                            <div class="d-flex flex-wrap align-items-center">
                                                <button class="ctrl-btn">-</button>
                                                <input type="text" class="counter-label" value="1">
                                                <button class="ctrl-btn">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <th scope="row" style="width: 20%;" class="text-center">
                                    <button class="cart-btn">Add To Cart</button>
                                    <button class="del-btn">Remove</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "WishlistPage",
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
.table-primary {
    --bs-table-bg: #2d7f944a;
    --bs-table-striped-bg: #2d7f944a;
    --bs-table-striped-color: #2d7f944a;
    --bs-table-active-bg: #bacbe6;
    --bs-table-active-color: #2d7f944a;
    --bs-table-hover-bg: #bfd1ec;
    --bs-table-hover-color: #2d7f944a;
    color: #000;
    border-color: #2d7f944a;
    vertical-align: middle;
}
.ctrl-btn{
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    outline: none;
    border: 1px dotted #2E8094;
    font-size: 30px;
    line-height: 0px;
}
.cart-btn{
    display: inline-block;
    border-radius: 5px;
    outline: none;
    border: 1px dotted #2E8094;
    background-color: #2d8094;
    color: white;
    font-size: 14px;
    padding: 5px 15px;
}
.del-btn{
    display: inline-block;
    border-radius: 5px;
    outline: none;
    border: 1px solid #2E8094;
    background-color: #eee;
    color: #2E8094;
    font-size: 14px;
    padding: 5px 15px;
}
.counter-label{
    font-size: 25px;
    margin:0 5px;
    border: none;
    text-align: center;
    max-width: 35px;
    display: inline-block;
    text-align: center;
}
td, th{
    vertical-align: middle;
}

.cart-container {
    text-decoration: none;
    display: inline;
    color: black;
}
.cart-container .col-img img{
    height: 120px;
    object-fit: contain;
}

.cart-container .col-detail{
    padding: 0 10px;
    width: 70%;
}

.cart-container .col-detail h5, .cart-container .col-detail h6{
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: auto;
}
.text-right{
    text-align: right;
}
.table>:not(caption)>*>*{
    border-color: #2E8094;
}
</style>