<template>
    <div class="form-group">
        <label>{{nameField}}</label>
        <div class="form-check" v-for="ar in arr" :value="ar" v-bind:key="ar">
            <input class="form-check-input" type="radio" name="exampleRadios" :id="ar" v-model="gender" :value="ar">
            <label class="form-check-label" :for="ar">
                {{ar}}
            </label>
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
                gender: null
            }
        },
        watch: {
            gender: function(){
                this.$emit('getValRadio', this.gender)
            }
        },
        mounted(){
            this.gender = this.valEdit === undefined ? null : this.valEdit;
        }
    }
</script>