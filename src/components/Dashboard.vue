<template>
  <div class="container-fluid p-4">
    
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fw-bold mb-0">Good Morning, Turja Sen</h2>
      <div class="d-flex align-items-center gap-3">
        <span class="text-muted">01 Sep - 15 Sep 2024</span>
        <button class="btn btn-primary">
          <i class="bi bi-download me-1"></i>
          Export Data
        </button>
      </div>
    </div>

    
    <div class="row mb-4">
      <div class="col-md-4">
        <TotalEmployees />
      </div>
      <div class="col-md-4">
        <AttendanceOverview />
      </div>
      <div class="col-md-4">
        <MostUsedDevices />
      </div>
    </div>

    
    <div class="row mb-4">
      <div class="col-lg-6">
        <EmployeePerformance />
      </div>
      <div class="col-lg-6">
        <IncomeStatistics />
      </div>
    </div>

    
    <div class="row">
      <div class="col-12">
        <EmployeeTable />
      </div>
    </div>
  </div>
</template>

<script>
import TotalEmployees from './TotalEmployees.vue'
import AttendanceOverview from './AttendanceOverview.vue'
import MostUsedDevices from './MostUsedDevices.vue'
import EmployeePerformance from './EmployeePerformance.vue'
import IncomeStatistics from './IncomeStatistics.vue'
import EmployeeTable from './EmployeeTable.vue'

export default {
  name: 'Dashboard',
  components: {
    TotalEmployees,
    AttendanceOverview,
    MostUsedDevices,
    EmployeePerformance,
    IncomeStatistics,
    EmployeeTable
  }
}
</script>
