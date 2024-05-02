<template>
    <form action="" class="form">
        <div class="container_form">
            <select class="full_height border_radius" name="from" id="">
                <option value="value1">Значение 1</option>
                <option value="value2" selected>Значение 2</option>
                <option value="value3">Значение 3</option>
            </select>

            <select class="full_height border_radius" name="where" id="">
                <option value="value1">Значение 1</option>
                <option value="value2" selected>Значение 2</option>
                <option value="value3">Значение 3</option>
            </select>

            <input class="full_height border_radius" type="data" name="when_from">
            <input class="full_height border_radius" type="data" name="when_back">

            <input class="full_height border_radius" type="count">
        </div>
    </form>
    <Flights/>
</template>

<script>
import axios from 'axios';
import Flights from './flights.vue';
export default {
    components: {
        Flights // Регистрация компонента Flights
    },
    data() {
        return {
            flights: [] // Переменная для хранения рейсов
        };
    },
    methods: {
        // Метод для получения рейсов с сервера
        async fetchFlights() {
            try {
                const response = await axios.get('http://localhost:3000/flights'); // Запрос к серверу
                this.flights = response.data; // Сохраняем полученные рейсы в переменной flights
            } catch (error) {
                console.error('Ошибка при получении рейсов:', error);
                // Обработка ошибки, например, вывод сообщения об ошибке пользователю
            }
        }
    },
    mounted() {
        // Вызов метода fetchFlights при загрузке компонента
        this.fetchFlights();
    }
}
</script>

<style scoped>
@import 'styles/css/form_plane.css';
</style>