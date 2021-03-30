<template>
    <div>
        <h3>Редактирование пользователя</h3>

        <TextInput @getValText="card.surname = $event" :valEdit="userInfo.surname" nameField="Фамилия"/>
        <TextInput @getValText="card.name = $event" :valEdit="userInfo.name" nameField="Имя"/>
        <TextInput @getValText="card.patronymic = $event" :valEdit="userInfo.patronymic" nameField="Отчество"/>
        <SelectList @getValSelected="card.position = $event" :valEdit="userInfo.position" :arr=arr
                    nameField="Должность"/>
        <DateInput @getValDate="card.date_of_birth = $event" :valEdit="userInfo.date_of_birth"
                   nameField="Дата рождения"/>
        <RadioInput @getValRadio="card.gender = $event" :valEdit="userInfo.gender" :arr="gender" nameField="Пол"/>
        <DateInput @getValDate="card.date_employment = $event" :valEdit="userInfo.date_employment"
                   nameField="Дата приема на работу"/>
        <DateInput @getValDate="card.date_of_dismissal = $event" :valEdit="userInfo.date_of_dismissal"
                   nameField="Дата увольнения"/>
        <CheckInput @getValCheck="card.rights = $event" :valEdit="userInfo.rights" nameField="Наличие прав"/>

        <button type="button" class="btn btn-success" @click="editUser">Сохранить</button>
        <button type="button" class="btn btn-secondary" @click="back">Назад</button>
    </div>
</template>

<script>
    import TextInput from '../components/TextInput.vue'
    import DateInput from '../components/DateInput.vue'
    import SelectList from '../components/SelectList.vue'
    import RadioInput from '../components/RadioInput.vue'
    import CheckInput from '../components/CheckInput.vue'

    export default {
        components: {
            TextInput, DateInput, SelectList, RadioInput, CheckInput
        },
        name: 'EditUser',
        data() {
            return {
                arr: ["Менеджер", "Пилот", "Программист", "Аналитик", "Гендир"],
                gender: ["M", "Ж"],
                card: {
                    surname: null,
                    name: null,
                    patronymic: null,
                    position: null,
                    date_of_birth: null,
                    gender: null,
                    date_employment: null,
                    date_of_dismissal: null,
                    rights: false,
                    id: null
                },
                userInfo: null
            }
        },
        methods: {
            editUser() {
                if (!this.checkAllFields()) {
                    alert("Заполните все поля со звездочками")
                    return
                }
                let allUser = (localStorage.allUser === undefined) ? [] : JSON.parse(localStorage.allUser)
                for (let i = 0; i < allUser.length; i++) {
                    if (allUser[i].id == this.card.id) {
                        allUser[i] = this.card
                        localStorage.allUser = JSON.stringify(allUser)
                        this.$router.push({ name: 'all'})
                    }
                }
            },

            back(){

                this.$router.push({ name: 'all'})
            },

            checkAllFields() {
                // Фамилия
                if (this.card.surname == null || this.card.surname === "") {
                    return false
                }
                // Имя
                if (this.card.name == null || this.card.name === "") {
                    return false
                }
                // Должность
                if (this.card.position == null || this.card.position === "") {
                    return false
                }
                // Дата рождения
                if (this.card.date_of_birth == null || this.card.date_of_birth === "") {
                    return false
                }
                // Пол
                if (this.card.gender == null || this.card.gender === "") {
                    return false
                }
                // Дата приема на работу
                if (this.card.date_employment == null || this.card.date_employment === "") {
                    return false
                }
                // Дата увольнения
                if ((this.card.date_of_dismissal == null || this.card.date_of_dismissal === "")) {
                    return false
                }
                // Проверка дат
                if (!(new Date(this.card.date_of_dismissal) > new Date(this.card.date_employment))) {
                    return false
                }
                return true
            }
        },
        beforeMount() {
            let id = this.$route.params.id
            let arr = JSON.parse(localStorage.allUser)
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    this.userInfo = arr[i]
                    this.card = this.userInfo
                    break
                }
            }
        }
    }
</script>
