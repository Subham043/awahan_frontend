<template>
    <section>
    <div class="category-view">
        <div class="category-image">
            <img src="https://staticinm2.ishalife.com/in/pub/media/catalog/category/3_Web.jpg"
                alt="Clothing &amp; Accessories" title="Clothing &amp; Accessories" class="image">
        </div>
    </div>
    <div class="container my-5">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="image-container">
                    <client-only>
                        <ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions" />
                    </client-only>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="detail-container">
                    <h4>Organic Unisex T Shirt Harvest Green 11-12 yrs</h4>
                    <label for="" class="d-flex flex-wrap align-items-center my-3">
                        <h3 class="m-0">&#x20B9; 360</h3> <p class="m-0 p-0 px-2">(Incl. of all taxes)</p>
                    </label>
                    <p>Unisex cotton t-shirt with 'Harvest the Ultimate' embroidered in green.</p>
                    <div class="cart-btn-container my-4">
                        <div class="d-flex flex-wrap align-items-center">
                            <div class="d-flex flex-wrap align-items-center">
                                <button class="ctrl-btn">-</button>
                                <input type="text" class="counter-label" value="1">
                                <button class="ctrl-btn">+</button>
                            </div>
                            <button class="cart-btn">ADD TO CART</button>
                        </div>
                    </div>
                    <div class="shipping-note-container mb-5">
                        <p>
                            <code class="note-underline">Shipping Note:</code>
                        </p>
                        <ul>
                            <li>Free Shipping on all orders of Rs 590 and above.</li>
                            <li>All orders shall be dispatched within 24-48 hours except on bank holidays</li>
                            <li>Delivery within India is usually completed within 5 - 10 working days depending on the location.</li>
                        </ul>
                    </div>
                    <div class="tab-container">
                        <el-tabs v-model="activeName">
                            <el-tab-pane name="first">
                                <div class="tab-slot-cont" slot="label"> Description</div>
                                <div class="tab-content-cont">
                                    <p>This unisex cotton t-shirt comes with an embroidery of 'Harvest the Ultimate' along with a distinctive design. Made of pure cotton fabric, it gives your child comfort and ease of movement.</p>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane name="second">
                                <div class="tab-slot-cont" slot="label"> Details</div>
                                <div class="tab-content-cont">
                                    <ul>
                                        <li>Fabric: Cotton</li>
                                        <li>Color: Light green</li>
                                        <li>Pattern: Round neck, Sleeveless</li>
                                        <li>Print: Embroidered tree motif</li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane name="third">
                                <div class="tab-slot-cont" slot="label"> Additional Information</div>
                                <div class="tab-content-cont">
                                    <ul>
                                        <li>Free Shipping on all orders of Rs 590 and above.</li>
                                        <li>EMI available on orders above Rs 3,000 on select credit cards</li>
                                        <li>We accept Credit or Debit Cards, Net Banking, Mobile Wallets, and UPI. All International and Indian cards are accepted.</li>
                                        <li>View our Return and Refund Policy</li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>


export default {
    name: "ProductDetailPage",
    layout: "MainPageLayout",
    data() {
        return {
            graphPer:67,
            activeName: 'first',
            images: {
                thumbs: [
                {
                    id: 1,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg",
                },
                {
                    id: 2,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002_3_.jpg",
                },
                {
                    id: 3,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002_2_.jpg",
                },
                {
                    id: 4,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_2_.jpg",
                },
                {
                    id: 5,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg",
                },
                ],
                normal_size: [
                {
                    id: 1,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg",
                },
                {
                    id: 2,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002_3_.jpg",
                },
                {
                    id: 3,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002_2_.jpg",
                },
                {
                    id: 4,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_2_.jpg",
                },
                {
                    id: 5,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg",
                },
                ],
                large_size: [
                {
                    id: 1,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg",
                },
                {
                    id: 2,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002_3_.jpg",
                },
                {
                    id: 3,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002_2_.jpg",
                },
                {
                    id: 4,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_2_.jpg",
                },
                {
                    id: 5,
                    url: "https://staticinm2.ishalife.com/in/pub/media/catalog/product/cache/15c9a315fd566a4a18e040a20055c3ee/0/2/0207002-b_3_.jpg",
                },
                ],
            },
            zoomerOptions: {
                zoomFactor: 3, // scale for zoomer
                pane: "pane", // three type of pane ['pane', 'container-round', 'container']
                hoverDelay: 300, // how long after the zoomer take effects
                move_by_click: true, // move image by click thumb image or by mouseover
                scroll_items: 5, // thumbs for scroll
                choosed_thumb_border_color: "#bbdefb", // choosed thumb border color
                scroller_button_style: "line",
                scroller_position: "bottom",
                zoomer_pane_position: "right",
            },
        };
    },

    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
    },
    methods:{
    }    

}


</script>

<style scoped>
.cart-btn{
    display: inline-block;
    width: auto;
    outline: none;
    border: none;
    background-color: #2E8094;
    color: #fff;
    padding: 15px 25px;
    border-radius: 5px;
    margin-left: 50px;
}
.ctrl-btn{
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    outline: none;
    border: 1px dotted #2E8094;
    font-size: 30px;
    line-height: 0px;
}
.counter-label{
    font-size: 35px;
    margin:0 15px;
    border: none;
    text-align: center;
    max-width: 50px;
    display: inline-block;
}

.note-underline{
    border-bottom: 1px solid #d63384;
    padding-bottom: 5px;
}

.tab-slot-cont{
    padding: 0 10px;
    font-size: 18px;
}

</style>