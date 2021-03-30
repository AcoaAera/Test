<template>
    <div>
        <span
                src="/img/update1.png"
                class="bg-bee-btn-color"
                v-on:click="changeTask()"
        >&#128393;</span>
        <span
                src="/img/delete.png"
                class="bg-bee-btn-color"
                v-on:click="del()"
        >&#128465;</span>
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
        font-size: 25px;
        cursor: pointer;
    }
    .bg-bee-btn-color:hover {
        border: 1px solid black;
        border-radius: 5px;
        font-size: 25px;
        cursor: pointer;
    }
</style>