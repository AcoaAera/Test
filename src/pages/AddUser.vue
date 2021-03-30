<template>
    <div>
        <h3>Добавление нового пользователя</h3>

        <TextInput @getValText="card.surname = $event" idField="surname" nameField="Фамилия *"/>
        <TextInput @getValText="card.name = $event" idField="name" nameField="Имя *"/>
        <TextInput @getValText="card.patronymic = $event" idField="patronymic" nameField="Отчество"/>
        <SelectList @getValSelected="card.position = $event" idField="position" :arr=arr nameField="Должность *"/>
        <DateInput @getValDate="card.date_of_birth = $event" idField="date_of_birth" nameField="Дата рождения *"/>
        <RadioInput @getValRadio="card.gender = $event" idField="gender" nameField="Пол *" :arr="gender"/>
        <DateInput @getValDate="card.date_employment = $event" idField="date_employment"
                   nameField="Дата приема на работу *"/>
        <DateInput @getValDate="card.date_of_dismissal = $event" idField="date_of_dismissal"
                   nameField="Дата увольнения *"/>
        <CheckInput @getValCheck="card.rights = $event" idField="rights" nameField="Наличие прав" :check="card.rights"/>

        <button type="button" class="btn btn-success" @click="addUser">Добавить</button>
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
        name: 'AddUser',
        props: {
            msg: String
        },
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
                }
            }
        },
        methods: {
            addUser() {
                if (!this.checkAllFields()) {
                    alert("Заполните все поля со звездочками")
                    return
                }
                let allUser = (localStorage.allUser === undefined) ? [] : JSON.parse(localStorage.allUser);
                this.card.id = allUser.length;
                allUser.push(this.card)
                localStorage.allUser = JSON.stringify(allUser)
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
                if (!(new Date(this.card.date_of_dismissal) > new Date(this.card.date_employment))){
                    return false
                }

                return true
            }
        }
    }
</script>
