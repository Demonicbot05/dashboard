<template>
  <div class="card h-100 border-0 shadow-sm">
    
    <div class="card-header bg-white border-0 d-flex justify-content-between align-items-center">
      <div>
        <h6 class="fw-bold mb-0">Employee Performance Ratings</h6>
        <small class="text-muted">
          At Tur.Agency, we're proud of our employees' consistent punctuality and quality work
        </small>
      </div>
      <button class="btn btn-sm btn-outline-light text-muted border-0">
        <i class="bi bi-three-dots"></i>
      </button>
    </div>

    
    <div class="card-body">
      
      <div class="d-flex align-items-baseline mb-4">
        <h2 class="fw-bold mb-0 me-2">98%</h2>
      </div>

      
      <div>
        <div
          v-for="employee in employees"
          :key="employee.name"
          class="d-flex align-items-center mb-3"
        >
          
          <div class="me-3" style="min-width: 130px;">
            <small class="fw-medium">{{ employee.name }}</small>
          </div>

          
          <div class="bar-track flex-grow-1 position-relative">
            <div
              class="bar-segment"
              :style="{
                left: '0%',
                width: (employee.taskCompleted / 40) * 100 + '%',
                backgroundColor: '#6c5ce7'
              }"
            ></div>
            <div
              class="bar-segment"
              :style="{
                left: (employee.taskCompleted / 40) * 100 + '%',
                width: (employee.presence / 40) * 100 + '%',
                backgroundColor: '#74b9ff'
              }"
            ></div>
            <div
              class="bar-segment"
              :style="{
                left: ((employee.taskCompleted + employee.presence) / 40) * 100 + '%',
                width: (employee.meeting / 40) * 100 + '%',
                backgroundColor: '#00b894'
              }"
            ></div>
          </div>
        </div>
      </div>

      
      <div class="d-flex justify-content-between mt-4 small text-muted flex-wrap">
        <div class="d-flex align-items-center mb-1">
          <span class="legend-dot me-2" style="background-color: #6c5ce7;"></span> Task completed
        </div>
        <div class="d-flex align-items-center mb-1">
          <span class="legend-dot me-2" style="background-color: #74b9ff;"></span> Presence
        </div>
        <div class="d-flex align-items-center mb-1">
          <span class="legend-dot me-2" style="background-color: #00b894;"></span> Completed Meeting
        </div>
      </div>

      
      <div class="d-flex justify-content-between mt-3 small text-muted">
        <span v-for="n in 9" :key="n">{{ (n - 1) * 5 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeePerformance',
  data() {
    return {
      employees: [
        { name: 'Ahsan Tapadar', taskCompleted: 8, presence: 6, meeting: 6 },
        { name: 'Koyes Ahmed', taskCompleted: 10, presence: 10, meeting: 12 },
        { name: 'Washi Bin M.', taskCompleted: 14, presence: 6, meeting: 10 },
        { name: 'Mir Muhsin', taskCompleted: 6, presence: 10, meeting: 8 },
        { name: 'Turja Sen Das', taskCompleted: 14, presence: 6, meeting: 12 }
      ]
    };
  }
};
</script>

<style scoped>
.bar-track {
  height: 6px;
  background-color: #f1f2f6;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.bar-segment {
  position: absolute;
  top: 0;
  height: 6px;
}

.legend-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>
