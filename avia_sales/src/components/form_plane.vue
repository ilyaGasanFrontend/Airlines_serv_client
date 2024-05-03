<template>
    <form action="" class="form">
        <div class="container_form">
            <select class="full_height border_radius" name="from" id="">
                <option v-for="line in airlines"  :value="line.airline_id" :key="airlines.airline_id">
                    {{ line.airline_name }}
                </option>
            </select>

            <select class="full_height border_radius" name="where" id="">
                <option v-for="country in countres"  :value="country.country_id" :key="country.country_id">
                    {{ country.country_name }}
                </option>
            </select>
    <VueDatePicker v-model="date"></VueDatePicker>

            <input class="full_height border_radius" type="data" name="when_back">

            <input class="full_height border_radius" type="count">
        </div>
    </form>
    <Flights/>
</template>

<script>
import { ref } from 'vue';
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  
  const date = ref();
import axios from 'axios';
import Flights from './flights.vue';
export default {
    components: {
        Flights // Регистрация компонента Flights
    },
    data() {
        return {
            countres: [], // Переменная для хранения рейсов
            airlines: [],
        };
    },
    methods: {
        // Метод для получения рейсов с сервера
        async fetchFlights() {
            try {
                const response_airlines = await axios.get('http://localhost:3000/airlines'); // Запрос к серверу
                const response_countres = await axios.get('http://localhost:3000/countries');
                this.airlines = response_airlines.data; // Сохраняем полученные рейсы в переменной flights
                this.countres = response_countres.data;
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