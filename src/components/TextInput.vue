<template>
    <div class="form-group">
        <label>{{nameField}}</label>
        <input :id="idField" type="text" v-model="val" class="form-control">
    </div>
</template>

<script>

    export default {
        props: {
            nameField: String,
            valEdit: String,
            idField: String
        },
        data(){
            return{
                val: null
            }
        },
        watch: {
            val: function(){
                this.$emit('getValText', this.val)
            }
        },
        mounted(){
            this.val = this.valEdit === undefined ? null : this.valEdit
        }

    }
</script>