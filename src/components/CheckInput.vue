<template>
    <div class="form-group">
        <label>{{nameField}}</label>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="check" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
                Наличие прав
            </label>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            nameField: String,
            valEdit: Boolean,
        },
        data(){
            return{
                check: false
            }
        },
        watch: {
            check: function () {
                this.$emit('getValCheck', this.check)
            }
        },
        mounted() {
            this.check = this.valEdit === undefined ? null : this.valEdit;
        }

    }
</script>