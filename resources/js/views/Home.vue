<template>
  <div class="container mx-auto">
    <button @click="fetchData">Fetch Data</button>
    <table class="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
      <thead class="bg-slate-50 dark:bg-slate-700">
        <tr>
          <th class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">ID</th>
          <th class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Name</th>
          <th class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Email</th>
          <th class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">100</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">Maria</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">maria@mail.com</td>
          <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">Entrada01</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  methods: {
    mounted() {
      this.fetchData();
    },
    fetchData() {
      axios.get('https://api.example.com/data') // Replace with your API URL
        .then((response) => {
          // Handle the successful response here
          console.log('Data:', response.data);
        })
        .catch((error) => {
          // Handle any errors here
          console.error('Error:', error);
        });
    },
  },
};
</script>