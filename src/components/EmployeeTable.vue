<template>
  <div class="card border-0 shadow-sm">
    <div class="card-header bg-white border-0">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h6 class="fw-bold mb-0">All Employees</h6>
        <button class="btn btn-primary btn-sm">
          <i class="bi bi-download me-1"></i>
          Export
        </button>
      </div>
      
      <!-- Filters -->
      <div class="d-flex align-items-center gap-3">
        <div class="position-relative">
          <input 
            type="text" 
            class="form-control form-control-sm" 
            placeholder="Search Employee" 
            style="padding-left: 35px; width: 250px;"
            v-model="searchQuery"
          >
          <i class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-2 text-muted"></i>
        </div>
        
        <select class="form-select form-select-sm" style="width: auto;" v-model="statusFilter">
          <option value="">All Status</option>
          <option value="full-time">Full-time</option>
          <option value="freelance">Freelance</option>
        </select>
        
        <select class="form-select form-select-sm" style="width: auto;" v-model="roleFilter">
          <option value="">All Role</option>
          <option value="designer">Designer</option>
          <option value="developer">Developer</option>
        </select>
      </div>
    </div>
    
    <div class="card-body p-0">
      <div class="table-responsive">
        <table class="table table-hover mb-0">
          <thead class="border-0">
            <tr>
              <th class="px-4">
                <input type="checkbox" class="form-check-input">
              </th>
              <th>Employee ID</th>
              <th>Employee name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Departments</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in filteredEmployees" :key="employee.id">
              <td class="px-4">
                <input type="checkbox" class="form-check-input">
              </td>
              <td>
                <span class="fw-medium">{{ employee.id }}</span>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <img :src="employee.avatar" :alt="employee.name" class="avatar me-2">
                  <span class="fw-medium">{{ employee.name }}</span>
                </div>
              </td>
              <td>
                <span class="text-muted">{{ employee.email }}</span>
              </td>
              <td>
                <span class="text-muted">{{ employee.role }}</span>
              </td>
              <td>
                <span class="text-muted">{{ employee.department }}</span>
              </td>
              <td>
                <span 
                  class="status-badge"
                  :class="{
                    'status-fulltime': employee.status === 'full-time',
                    'status-freelance': employee.status === 'freelance'
                  }"
                >
                  {{ employee.status === 'full-time' ? 'Full-time' : 'Freelance' }}
                </span>
              </td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <button class="btn btn-sm btn-outline-primary">
                    <i class="bi bi-eye"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-light text-muted border-0">
                    <i class="bi bi-three-dots"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeTable',
  data() {
    return {
      searchQuery: '',
      statusFilter: '',
      roleFilter: '',
      employees: [
        {
          id: 'TUR671219',
          name: 'Ahsan Tapadar',
          email: 'ahsan.tur@mail.com',
          role: 'Sr UI/UX Designer',
          department: 'Team Projects',
          status: 'full-time',
          avatar: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="%23ff6b6b"%3E%3Ccircle cx="12" cy="12" r="10"/%3E%3C/svg%3E'
        },
        {
          id: 'TUR185103',
          name: 'Washi Bin M.',
          email: 'washi.tur@mail.com',
          role: 'Lead Product Designer',
          department: 'Head of Projects',
          status: 'full-time',
          avatar: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="%234ecdc4"%3E%3Ccircle cx="12" cy="12" r="10"/%3E%3C/svg%3E'
        },
        {
          id: 'TUR715481',
          name: 'Koyes Ahmed',
          email: 'koyes.tur@mail.com',
          role: 'Sr UX Designer',
          department: 'Client & Team Work',
          status: 'full-time',
          avatar: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="%2374b9ff"%3E%3Ccircle cx="12" cy="12" r="10"/%3E%3C/svg%3E'
        },
        {
          id: 'TUR016481',
          name: 'Turja Sen Das',
          email: 'Turja.tur@mail.com',
          role: 'Mid UI Designer',
          department: 'Case Study',
          status: 'freelance',
          avatar: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="%23a29bfe"%3E%3Ccircle cx="12" cy="12" r="10"/%3E%3C/svg%3E'
        }
      ]
    }
  },
  computed: {
    filteredEmployees() {
      let filtered = this.employees

      if (this.searchQuery) {
        filtered = filtered.filter(employee => 
          employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          employee.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }

      if (this.statusFilter) {
        filtered = filtered.filter(employee => employee.status === this.statusFilter)
      }

      if (this.roleFilter) {
        filtered = filtered.filter(employee => 
          employee.role.toLowerCase().includes(this.roleFilter.toLowerCase())
        )
      }

      return filtered
    }
  }
}
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
}

.table th {
  border-top: none;
  font-weight: 600;
  color: #6c757d;
  font-size: 0.875rem;
  padding: 1rem 0.75rem;
  background-color: #f8f9fa;
}

.table td {
  padding: 1rem 0.75rem;
  vertical-align: middle;
  border-top: 1px solid #f0f0f0;
}

.table tbody tr:hover {
  background-color: #f8f9fa;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-fulltime {
  background-color: #d1e7dd;
  color: #0f5132;
}

.status-freelance {
  background-color: #fff3cd;
  color: #664d03;
}

.form-control:focus,
.form-select:focus {
  border-color: #6c5ce7;
  box-shadow: 0 0 0 0.2rem rgba(108, 92, 231, 0.25);
}
</style>