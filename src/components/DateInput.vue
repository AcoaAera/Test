<template>
    <div class="form-group">
        <label>{{nameField}}</label>
        <input type="date" class="form-control" v-model="dates">
    </div>
</template>

<script>

    export default {
        props: {
            nameField: String,
            valEdit: String,
        },
        data(){
            return{
                dates: null
            }
        },
        watch: {
            dates: function(){
                this.$emit('getValDate', this.dates)
            }
        },
        mounted(){
            this.dates = this.valEdit === undefined ? null : this.valEdit;
        }
    }
</script>