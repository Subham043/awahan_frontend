<template>
    <div v-if="data.length>0">
        <div class="row full-row">
            <div v-for="(item, i) in data" class="col-md-3 col-full-width"  :key="i">
                <div :class="`counter-bg counter-bg${i+1}`">
                    <p class="counter-heading">
                        {{ item.title }}
                    </p>
                    <h2 class="counter-value">
                        {{ item.counter }}
                    </h2>
                </div>
            </div>

        </div>
    </div>
</template>

<script>


export default {
    name: "CounterComponent",
    props:{
        data:{
            type: Array,
            default: []
        },
    },
}

</script>