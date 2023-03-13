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
                <h2><span class="heading-span-clr">My</span> <span class="heading-2nd">Account</span></h2>
                <div class="w-100">
                    <hr role="tournament6" />
                </div>
            </div>
        </section>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-cart">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="first_name" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="first_name">
                        </div>
                        <div class="col-md-6">
                            <label for="last_name" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="last_name">
                        </div>
                        <div class="col-md-4">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email">
                        </div>
                        <div class="col-md-4">
                            <label for="phone" class="form-label">Phone</label>
                            <input type="text" class="form-control" id="phone">
                        </div>
                        <div class="col-md-4">
                            <label for="gender" class="form-label">Gender</label>
                            <select id="gender" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
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