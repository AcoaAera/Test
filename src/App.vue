<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/#/">Все пользователи</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/#/add">Добавить пользователя</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container my-5">
            <router-view />
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data(){
            return{
                data: {"surname":"Кораблев","name":"Алексей","patronymic":"Васильевич","position":"Менеджер","date_of_birth":"1111-11-11","gender":"M","date_employment":"1111-11-11","date_of_dismissal":"2222-02-22","rights":true,"id":2}
            }
        }
    }
</script>

<style lang="scss">
    @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
    @import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>