import { createStore } from 'vuex';

export default createStore({
  state: {
    autocompleteResults: [], 
    company: {},
    employees: [],
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
      const employeeIndex = state.employees.findIndex(x => x.id == employeeId);
      if (employeeIndex !== -1) {
        const employeeToMove = state.employees.splice(employeeIndex, 1)[0];
        state.company.employees.push(employeeToMove);
      }
    },
    moveEmployeeToParticipants(state, employeeId) {
      const employeeIndex = state.company.employees.findIndex(x => x.id == employeeId);
      if (employeeIndex !== -1) {
        const employeeToMove = state.company.employees.splice(employeeIndex, 1)[0];
        state.employees.push(employeeToMove);
      }
    }
  },
  actions: {
    async fetchAutocompleteResults({ commit }, query) {
      let queryString = query.target.value;

      if(queryString.length){
        axios.get('/api/companies?query='+queryString)
          .then((response) => {
            commit('setAutocompleteResults', response.data.data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }else{
        commit('setAutocompleteResults', []);
      }
      
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
