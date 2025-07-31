<template>
  <div class="sidebar d-flex flex-column p-3">
    <!-- Logo -->
    <div class="d-flex align-items-center mb-4">
      <div class="bg-primary rounded p-2 me-2">
        <i class="bi bi-person-badge text-white"></i>
      </div>
      <h5 class="mb-0 fw-bold">TurHR</h5>
    </div>

    <!-- Navigation -->
    <nav class="flex-grow-1">
      <ul class="nav nav-pills flex-column">
        <li class="nav-item mb-2">
          <a href="#" class="nav-link active d-flex align-items-center">
            <i class="bi bi-speedometer2 me-2"></i>
            Dashboard
          </a>
        </li>
        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-muted d-flex align-items-center">
            <i class="bi bi-folder me-2"></i>
            Projects
          </a>
        </li>
        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-muted d-flex align-items-center">
            <i class="bi bi-calendar3 me-2"></i>
            Calendar
          </a>
        </li>
        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-muted d-flex align-items-center">
            <i class="bi bi-calendar-check me-2"></i>
            Leave Management
          </a>
        </li>
        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-muted d-flex align-items-center">
            <i class="bi bi-gear me-2"></i>
            Settings
          </a>
        </li>
        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-muted d-flex align-items-center">
            <i class="bi bi-bell me-2"></i>
            Notification
          </a>
        </li>
        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-muted d-flex align-items-center">
            <i class="bi bi-question-circle me-2"></i>
            Help & Center
          </a>
        </li>
      </ul>

      <!-- Team Management Section -->
      <div class="mt-4">
        <p class="text-muted small mb-3 text-uppercase">Team Management</p>
        <ul class="nav nav-pills flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link text-muted d-flex align-items-center">
              <i class="bi bi-graph-up me-2"></i>
              Performance
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link text-muted d-flex align-items-center">
              <i class="bi bi-wallet2 me-2"></i>
              Payrolls
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link text-muted d-flex align-items-center">
              <i class="bi bi-receipt me-2"></i>
              Invoices
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link text-muted d-flex align-items-center">
              <i class="bi bi-people me-2"></i>
              Employees
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link text-muted d-flex align-items-center">
              <i class="bi bi-person-plus me-2"></i>
              Recruitment & Hiring
            </a>
          </li>
        </ul>
      </div>

      <!-- List Section -->
      <div class="mt-4">
        <p class="text-muted small mb-3 text-uppercase">List</p>
        <ul class="nav nav-pills flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link text-muted d-flex align-items-center">
              <i class="bi bi-currency-dollar me-2"></i>
              Salary Information
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link text-muted d-flex align-items-center">
              <i class="bi bi-pie-chart me-2"></i>
              Compensation Breakdown
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link text-muted d-flex align-items-center">
              <i class="bi bi-bar-chart me-2"></i>
              Project-specific Data
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Announcements -->
    <div class="mt-auto">
      <div class="card border-0" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        <div class="card-body text-white">
          <div class="d-flex align-items-center mb-2">
            <div class="bg-white bg-opacity-25 rounded p-1 me-2">
              <i class="bi bi-megaphone"></i>
            </div>
            <small class="fw-bold">Announcements</small>
          </div>
          <p class="small mb-2">Stay updated with TurHR</p>
          <button class="btn btn-light btn-sm">Create Now</button>
          <div class="mt-2">
            <small class="opacity-75">Read by:</small>
            <div class="d-flex mt-1">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='%23fff'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E" class="rounded-circle me-1" width="20" height="20">
              <span class="small">+10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  min-height: 100vh;
}

.nav-link {
  border-radius: 8px;
  padding: 10px 12px;
}

.nav-link.active {
  background-color: #6c5ce7;
}

.nav-link:hover {
  background-color: #f8f9fa;
}
</style>