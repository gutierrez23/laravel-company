<template>
  <h1>
    {{ company.name }}
  </h1>
  <div class="drag-drop-container">
    <div class="hired">
      <div class="title">
        <h4>Hired</h4>
      </div>
      <div
        class="container"
        @dragover.prevent
        @drop="handleDrop('hired', $event)"
        @dragenter="handleDragEnter($event)"
        @dragleave="handleDragLeave($event)"
      >
        <!-- Render hired employees here -->
        <div
          class="employee"
          v-for="employee in company.employees"
          :key="employee.id"
          @dragstart="handleDragStart(employee, 'hired', $event)"
          draggable="true"
        >
          {{ employee.name }}
        </div>
      </div>
    </div>
    <div class="participants">
      <div class="title">
        <h4>Participants</h4>
      </div>
      <div
        class="container"
        @dragover.prevent
        @drop="handleDrop('participants', $event)"
      >
      <!-- Render participants here -->
        <div
          class="employee"
          v-for="employee in employees"
          :key="employee.id"
          @dragstart="handleDragStart(employee, 'participants', $event)"
          draggable="true"
        >
          {{ employee.name }}
        
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    companyId() {
      return this.$route.params.id;
    },
    ...mapState(['company']),
    ...mapState(['employees']),
  },
  created() {
    this.fetchCompany(this.companyId);
    this.fetchEmployees();
  },
  methods: {
    ...mapActions(['fetchCompany']),
    ...mapActions(['fetchEmployees']),
    
    handleDragEnter(event) {
      event.preventDefault();
      event.target.classList.add('drag-over');
    },

    handleDragLeave(event) {
      event.target.classList.remove('drag-over');
    },

    handleDragStart(employee, source, event) {
      event.dataTransfer.setData('employeeId', employee.id);
      event.dataTransfer.setData('source', source);
    },
    handleDrop(target, event) {
      event.preventDefault();
      const employeeId  = event.dataTransfer.getData('employeeId');
      const source      = event.dataTransfer.getData('source');
      // Update the Vuex store based on the source and target containers
      if (source === 'participants' && target === 'hired') {
        // Move the employee from 'participants' to 'hired'
        this.$store.commit('moveEmployeeToHired', employeeId);
      } else if (source === 'hired' && target === 'participants') {
        // Move the employee from 'hired' to 'participants'
        this.$store.commit('moveEmployeeToParticipants', employeeId);
      }
    },
  },
};
</script>
<style>
.drag-drop-container {
  width: 50%;
  border: 1px solid #ccc;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.container {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  min-height: 100px;
  overflow-y: auto;
}

.employee {
  margin: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.drop-hired {
  /* Style for hired employees */
  background-color: #e0ffe0;
}

.drag-participants {
  /* Style for participants employees */
  background-color: #ffe0e0;
}
</style>