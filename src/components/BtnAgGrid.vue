<template>
    <div>
        <img
                src="/img/update1.png"
                class="bg-bee-btn-color"
                v-on:click="changeTask()"
        />
        <img
                src="/img/delete.png"
                class="bg-bee-btn-color"
                v-on:click="del()"
        />
    </div>
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
        methods: {
            changeTask() {
                this.params.changeTask(this.params.value);
            },
            del() {
                this.changeRowDatas();
                this.params.del(this.params.value);
            }
        },
    });
</script>

<style scoped>
    .bg-bee-btn-color {
        width: 34px;
        height: 34px;
    }
</style>