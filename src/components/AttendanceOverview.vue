<template>
  <div class="card h-100 border-0 shadow-sm">
    <div class="card-header bg-white border-0 d-flex justify-content-between align-items-center">
      <h6 class="fw-bold mb-0">Attendance Overview</h6>
      <button class="btn btn-sm btn-outline-light text-muted border-0">
        <i class="bi bi-three-dots"></i>
      </button>
    </div>
    <div class="card-body">
      <div class="d-flex align-items-baseline mb-3">
        <h2 class="fw-bold mb-0 me-2">90%</h2>
        <span class="badge bg-success-subtle text-success">
          <i class="bi bi-arrow-up"></i> 20% since last month
        </span>
      </div>
      
      <!-- Progress bars -->
      <div class="mb-3">
        <div class="progress mb-2" style="height: 8px;">
          <div class="progress-bar bg-success" style="width: 30%"></div>
          <div class="progress-bar bg-warning" style="width: 25%"></div>
          <div class="progress-bar bg-primary" style="width: 35%"></div>
        </div>
        
        <div class="d-flex justify-content-between small text-muted">
          <div>
            <span class="badge rounded-pill bg-success me-1"></span>
            Sick Leave
          </div>
          <div>
            <span class="badge rounded-pill bg-warning me-1"></span>
            Day Off
          </div>
          <div>
            <span class="badge rounded-pill bg-primary me-1"></span>
            On time
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AttendanceOverview'
}
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
}

.progress {
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  border-radius: 10px;
}

.badge.rounded-pill {
  width: 8px;
  height: 8px;
  padding: 0;
  border-radius: 50% !important;
}

.bg-success-subtle {
  background-color: #d1e7dd !important;
}
</style>