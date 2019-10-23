<template>
    <div>
        <customized-nav />
        <main>
            <router-view/>
        </main>
        <!-- <div class="22"><customized-footer /></div> -->
    </div>
</template>

<script>
    // import CustomizedFooter from 'components/customized-footer.vue';
    import CustomizedNav from 'components/customized-nav.vue';

    export default {
        name: 'layout-front',
        data() {
            return {}
        },
        components: {
            // CustomizedFooter,
            CustomizedNav
        },
    }
</script>
<style>
    main{
        width: 1280px;
        margin: auto;
        overflow: auto;
    }
</style>
