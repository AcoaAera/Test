<template>
    <div class="form-group">
        <label>{{nameField}}</label>
        <div class="input-group">
            <select class="custom-select" v-model="selected">
                <option disabled value="Выберите один из вариантов">Выберите один из вариантов</option>
                <option v-for="ar in arr" :value="ar" v-bind:key="ar">
                    {{ ar }}
                </option>
            </select>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            arr: Array,
            nameField: String,
            valEdit: String,
        },
        data(){
            return{
                selected: null
            }
        },
        watch: {
            selected: function(){
                this.$emit('getValSelected', this.selected)
            }
        },
        mounted(){
            this.selected = this.valEdit === undefined ? null : this.valEdit;
        }
    }
</script>