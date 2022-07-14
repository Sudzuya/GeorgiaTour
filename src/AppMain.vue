<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>

<script>
import Home from "./layouts/Home";
import Tour from "./layouts/Tour";

export default {
    name: "AppMain",
    components: {
        Home,
        Tour, 
    },
    computed: {
        layout() {
            if (this.$route.hasOwnProperty('meta') && this.$route.meta.layout === 'Home') {
                return Home
            } else if (this.$route.hasOwnProperty('meta') && this.$route.meta.layout === 'Tour') {
                return Tour
            } else {
                return Home
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
