<template>
    <div>
      <h1>Рейсы</h1>
      <ul>
        <li v-for="flight in flights" :key="flight.flight_id">
          {{ flight.departure_country_id }}  __ {{ flight.departure_date }} ___ {{ flight.arrival_time }}  
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        flights: []
      };
    },
    methods: {
      async fetchFlights() {
        try {
          const response = await axios.get('http://localhost:3000/flights');
          // console.log(Object.keys(response.data))
          console.log(response.data['0'].flight_id)

          this.flights = response.data;
        } catch (error) {
          console.error('Ошибка при получении рейсов:', error);
        }
      }
    },
    mounted() {
      this.fetchFlights();
    }
  };
  </script>
  
  <style scoped>
  /* Ваши стили компонента */
  </style>