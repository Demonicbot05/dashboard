<template>
  <div class="card border-0 shadow-sm p-3">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h6 class="fw-bold mb-0">Total Employees</h6>
      <button class="btn btn-sm btn-light text-muted border-0">
        <i class="bi bi-three-dots"></i>
      </button>
    </div>

    <div class="employee-row bg-teal-subtle d-flex justify-content-between align-items-center px-3 py-2 rounded mb-2">
      <div class="d-flex align-items-baseline">
        <h4 class="fw-bold mb-0 me-2">150</h4>
        <span class="text-success small d-flex align-items-center">
          <i class="bi bi-arrow-up-short me-1"></i> 50
        </span>
      </div>
      <span class="text-muted small">Fulltime Employee</span>
    </div>

    <div class="employee-row bg-yellow-subtle d-flex justify-content-between align-items-center px-3 py-2 rounded">
      <div class="d-flex align-items-baseline">
        <h4 class="fw-bold mb-0 me-2">50</h4>
        <span class="text-danger small d-flex align-items-center">
          <i class="bi bi-arrow-down-short me-1"></i> 10
        </span>
      </div>
      <span class="text-muted small">Freelance Employee</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TotalEmployees'
}
</script>

<style scoped>
.bg-teal-subtle {
  background-color: #e7f6f0;
}

.bg-yellow-subtle {
  background-color: #fff8e5;
}

.employee-row {
  font-size: 0.95rem;
}

.card {
  border-radius: 12px;
}

h4 {
  font-size: 1.5rem;
}
</style>
