<template>
  <div class="container mx-auto">
    <div>
      <h1>Company</h1>
      <input class="border input-autocomplete" v-model="query" @input="fetchAutocompleteResults" />
      <ul v-if="autocompleteResults.length" class="autocomplete_list">
        <li v-for="result in autocompleteResults" :key="result.id" @click="loadCompany(result.id)">
          {{ result.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
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
    loadCompany(companyId){
      this.$router.push({ name: 'Companies', params: { id: companyId }  }); 
    }
  },
};
</script>

<style>
.input-autocomplete{
  padding: 5px;
  width: 19em;
}
ul.autocomplete_list {
  width: 12em;
  padding-left: 15px;
}
ul.autocomplete_list li {
  padding: 4px 6px 4px 6px;
  border: 1px solid #ccc;
  margin: 5px 1px;
  cursor: pointer;
}
</style>