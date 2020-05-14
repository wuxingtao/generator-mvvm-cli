<template>
    <div class="home">
        <h1>This is an home page</h1>
    </div>
</template>

<script>
export default {
    name: "Home",
    computed: {
        templateName(){
            return this.$store.getters.templateName
        }
    },
    mounted(){
        this.$store.dispatch('app_status_change',true)
    }
};
</script>

<style scoped>

</style>
