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
                <h2><span class="heading-span-clr">My</span> <span class="heading-2nd">Orders</span></h2>
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
                                <th scope="col">Order</th>
                                <th scope="col" class="text-center">Date</th>
                                <th scope="col" class="text-center">Status</th>
                                <th scope="col" class="text-center">Total</th>
                                <th scope="col" class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="py-4">
                                <td style="width: 20%;">
                                    <h6>#5610</h6>
                                </td>
                                <td style="width: 20%;" class="text-center">
                                    <h6>March 1, 2023</h6>
                                </td>
                                <td style="width: 20%;" class="text-center">
                                    <h6>#5610</h6>
                                </td>
                                <td style="width: 20%;" class="text-center">
                                    <h6>₹639.00 for 1 item</h6>
                                </td>
                                <th scope="row" style="width: 20%;" class="text-center">
                                    <button class="cart-btn" @click="dialogVisible = true">View</button>
                                    <button class="del-btn">Cancel</button>
                                </th>
                            </tr>
                            <tr class="py-4">
                                <td style="width: 20%;">
                                    <h6>#5610</h6>
                                </td>
                                <td style="width: 20%;" class="text-center">
                                    <h6>March 1, 2023</h6>
                                </td>
                                <td style="width: 20%;" class="text-center">
                                    <h6>#5610</h6>
                                </td>
                                <td style="width: 20%;" class="text-center">
                                    <h6>₹639.00 for 1 item</h6>
                                </td>
                                <th scope="row" style="width: 20%;" class="text-center">
                                    <button class="cart-btn" @click="dialogVisible = true">View</button>
                                    <button class="del-btn">Cancel</button>
                                </th>
                            </tr>
                            <tr class="py-4">
                                <td style="width: 20%;">
                                    <h6>#5610</h6>
                                </td>
                                <td style="width: 20%;" class="text-center">
                                    <h6>March 1, 2023</h6>
                                </td>
                                <td style="width: 20%;" class="text-center">
                                    <h6>#5610</h6>
                                </td>
                                <td style="width: 20%;" class="text-center">
                                    <h6>₹639.00 for 1 item</h6>
                                </td>
                                <th scope="row" style="width: 20%;" class="text-center">
                                    <button class="cart-btn" @click="dialogVisible = true">View</button>
                                    <button class="del-btn">Cancel</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            :lock-scroll="true"
            :show-close="false"
            width="70%"
            :before-close="handleClose">
            <div class="container">
                <h2><span class="heading-span-clr">Order</span> <span class="heading-2nd">#5610</span></h2>
                <code>Order #5610 was placed on March 1, 2023 and is currently Cancelled.</code>
                <div class="w-100">
                    <hr role="tournament6" />
                </div>
                <table class="table" style="width: 100%;">
                    <thead>
                        <tr class="table-dark">
                            <th scope="col">Product</th>
                            <th scope="col" class="text-right">Total</th>
                        </tr>
                        <tr style="border: none;">
                            <th scope="col" class="text-mute" style="font-size: 16px;border: none;">
                                Day Cream with UV Protection – 100g
                                <br/>
                                <span style="font-size: 14px;">
                                    <code>Quantity</code> : <b>2</b>
                                </span>
                            </th>
                            <th scope="col" class="text-right" style="border: none;"><h6>&#x20B9; 360</h6></th>
                        </tr>
                        <tr class="border-none">
                            <th scope="col" class="text-mute" style="font-size: 16px;">
                                Organic Unisex T Shirt Harvest Green 11-12 yrs
                                <br/>
                                <span style="font-size: 14px;">
                                    <code>Quantity</code> : <b>1</b>
                                </span>
                            </th>
                            <th scope="col" class="text-right"><h6>&#x20B9; 320</h6></th>
                        </tr>
                        <tr class="table-warning border-none">
                            <th scope="col">
                                <h6>SUB TOTAL</h6>
                            </th>
                            <th scope="col" class="text-right"><h6>&#x20B9; 680</h6></th>
                        </tr>
                        <tr class="table-secondary border-none">
                            <th scope="col">
                                <h6>SHIPPING</h6>
                            </th>
                            <th scope="col" class="text-right"><h6>&#x20B9; 20</h6></th>
                        </tr>
                        <tr class="border-none">
                            <th scope="col">
                                <h6>PAYMENT METHOD</h6>
                            </th>
                            <th scope="col" class="text-right"><h6>CCAvenue</h6></th>
                        </tr>
                        <tr class="table-primary border-none">
                            <th scope="col">
                                <h6>TOTAL</h6>
                            </th>
                            <th scope="col" class="text-right"><h6>&#x20B9; 700</h6></th>
                        </tr>
                    </thead>
                </table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Close</el-button>
                <el-button type="danger" @click="dialogVisible = false">Cancel</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>

export default {
    name: "OrderPage",
    layout: "MainPageLayout",
    data() {
        return {
            dialogVisible: false
        }
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
td, th{
    vertical-align: middle;
}

.table>:not(caption)>*>*{
    border-color: #2E8094;
}

.table h6{
    margin: 0;
    padding: 0;
}

.text-right{
    text-align: right;
}
</style>