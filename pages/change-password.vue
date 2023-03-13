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
                <h2><span class="heading-span-clr">Change</span> <span class="heading-2nd">Password</span></h2>
                <div class="w-100">
                    <hr role="tournament6" />
                </div>
            </div>
        </section>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-cart">
                    <form class="row g-3">
                        <div class="col-md-4">
                            <label for="old_password" class="form-label">Old Password</label>
                            <input type="password" class="form-control" id="old_password">
                        </div>
                        <div class="col-md-4">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password">
                        </div>
                        <div class="col-md-4">
                            <label for="confirm_password" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="confirm_password">
                        </div>
                        <div class="col-12">
                            <button type="submit" class="cart-btn">SAVE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "AccountPage",
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
.cart-btn{
    display: inline-block;
    border-radius: 5px;
    outline: none;
    border: 1px dotted #2E8094;
    background-color: #2d8094;
    color: white;
    font-size: 14px;
    padding: 10px 20px;
}
</style>