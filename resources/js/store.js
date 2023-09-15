import { createStore } from 'vuex';

export default createStore({
  state: {
    autocompleteResults: [], 
    company: {},
    employees: [],
    hired: [],
  },
  mutations: {
    setAutocompleteResults(state, results) {
      state.autocompleteResults = results;
    },
    setCompany(state, company) {
      state.company = company;
    },
    setEmployees(state, employees) {
      state.employees = employees;
    },
    moveEmployeeToHired(state, employeeId) {
      console.log(employeeId);
    },
  },
  actions: {
    async fetchAutocompleteResults({ commit }, query) {
      axios.get('/api/companies')
        .then((response) => {
          commit('setAutocompleteResults', response.data.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
    async fetchCompany({ commit }, companyId) {
      try {
        const response = await axios.get('/api/companies/'+companyId)
        commit('setCompany', response.data.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    },
    async fetchEmployees({ commit }) {
      try {
        const response = await axios.get('/api/employee')
        commit('setEmployees', response.data.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    }
  },
});
