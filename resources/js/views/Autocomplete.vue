<template>
  <div>
    <h1>w23</h1>
    <input v-model="query" @input="fetchAutocompleteResults" />
    <ul v-if="autocompleteResults.length">
      <li v-for="result in autocompleteResults" :key="result.id">{{ result.name }}</li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      query: '',
    };
  },
  computed: {
    ...mapState(['autocompleteResults']),
  },
  methods: {
    ...mapActions(['fetchAutocompleteResults']),
  },
};
</script>
