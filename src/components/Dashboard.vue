<template>
  <div class="dashboard-container">
    <!-- Header Section -->
    <div class="dashboard-header">
      <div>
        <h2>Good Morning, Ojas Parab</h2>
        <p>Here’s an overview of your dashboard</p>
      </div>
      <div class="header-actions">
        <input type="text" placeholder="Quick Search..." class="search-input" />
        <button class="export-btn">Export Data</button>
      </div>
    </div>

    <!-- Cards Row -->
    <div class="card-row">
      <div class="card">
        <h3>Total Employees</h3>
        <div class="info-block">
          <p><strong>150</strong> <span class="tag blue">+50</span> Full-time Employee</p>
          <p><strong>50</strong> <span class="tag orange">+10</span> Freelance Employee</p>
        </div>
      </div>

      <div class="card">
        <h3>Attendance Overview</h3>
        <p class="value">90% <span class="tag green">+20%</span> since last month</p>
        <ul class="attendance-list">
          <li>✅ On Time</li>
          <li>🟡 Sick Leave</li>
          <li>🔴 Day Off</li>
        </ul>
      </div>

      <div class="card">
        <h3>Today Used Devices</h3>
        <div class="device-usage">
          <p><span>💻</span> MacBook - 80</p>
          <p><span>⌨</span> Keyboard - 13</p>
          <p><span>🎧</span> Headphones - 7</p>
        </div>
      </div>
    </div>

    <div class="main-section">
      <div class="card performance">
        <h3>Employee Performance Ratings</h3>
        <p class="rating">98%</p>
        <p class="desc">At SpectroNovaSoft, we’re proud of our employees’ consistent punctuality and quality work.</p>
        <div class="performance-bars">
          <div v-for="employee in performanceData" :key="employee.name">
            <p>{{ employee.name }}</p>
            <div class="bar">
              <div class="task" :style="{ width: employee.task + '%' }"></div>
              <div class="presence" :style="{ width: employee.presence + '%' }"></div>
              <div class="meeting" :style="{ width: employee.meeting + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="card chart">
  <h3>Income Statistics</h3>
  <div class="chart-box">
    <Bar :data="incomeChartData" :options="incomeChartOptions" />
  </div>
</div>

    </div>

    <div class="card employee-table">
      <div class="table-header">
        <input type="text" placeholder="Search Employee" />
        <select><option>All Status</option></select>
        <select><option>All Role</option></select>
        <button class="export-btn">Export</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Department</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="emp in employees" :key="emp.id">
            <td>{{ emp.id }}</td>
            <td>{{ emp.name }}</td>
            <td>{{ emp.email }}</td>
            <td>{{ emp.role }}</td>
            <td>{{ emp.department }}</td>
            <td><span class="badge" :class="emp.status.toLowerCase()">{{ emp.status }}</span></td>
            <td><button>...</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);


export default {
  components: {
    Bar
  },
   data() {
    return {
      performanceData: [
        { name: 'Ojas parab', task: 20, presence: 15, meeting: 10 },
        { name: 'jason dias', task: 25, presence: 20, meeting: 5 },
        { name: 'JP. morgen', task: 30, presence: 10, meeting: 5 },
        { name: 'Mr. sinna', task: 15, presence: 20, meeting: 5 },
        { name: 'mac henry', task: 10, presence: 10, meeting: 10 }
      ],
      employees: [
        {
          id: 'SNS871219',
          name: 'Ojas parab',
          email: 'ojasparab5@mail.com',
          role: 'software Designer',
          department: 'Team Projects',
          status: 'intern'
        },
        {
          id: 'SNS85103',
          name: 'jason dias',
          email: 'jasontur@mail.com',
          role: 'Lead Product Designer',
          department: 'Head of Projects',
          status: 'Full-time'
        },
        {
          id: 'SNS715487',
          name: 'JP. morgen',
          email: 'morgen@mail.com',
          role: 'Sr UX Designer',
          department: 'Client & Team Work',
          status: 'Full-time'
        },
        {
          id: 'SNS061481',
          name: 'Mr. sinna',
          email: 'sinna@mail.com',
          role: 'Mid UI Designer',
          department: 'Case Study',
          status: 'Freelance'
        }
      ],
      incomeChartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Income ($)',
            data: [12000, 15000, 14000, 17000, 16000, 18000],
            backgroundColor: '#7c3aed',
            borderRadius: 6
          }
        ]
      },
      incomeChartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 2000
            }
          }
        }
      }
    }
  
    return {
      performanceData: [
        { name: 'Ojas parab', task: 20, presence: 15, meeting: 10 },
        { name: 'jason dias', task: 25, presence: 20, meeting: 5 },
        { name: 'JP. morgen', task: 30, presence: 10, meeting: 5 },
        { name: 'Mr. sinna', task: 15, presence: 20, meeting: 5 },
        { name: 'mac henry', task: 10, presence: 10, meeting: 10 }
      ],
      employees: [
        {
          id: 'SNS871219',
          name: 'Ojas parab',
          email: 'ojasparab5@mail.com',
          role: 'software Designer',
          department: 'Team Projects',
          status: 'intern'
        },
        {
          id: 'SNS85103',
          name: 'jason dias',
          email: 'jasontur@mail.com',
          role: 'Lead Product Designer',
          department: 'Head of Projects',
          status: 'Full-time'
        },
        {
          id: 'SNS715487',
          name: 'JP. morgen',
          email: 'morgen@mail.com',
          role: 'Sr UX Designer',
          department: 'Client & Team Work',
          status: 'Full-time'
        },
        {
          id: 'SNS061481',
          name: 'Mr. sinna',
          email: 'sinna@mail.com',
          role: 'Mid UI Designer',
          department: 'Case Study',
          status: 'Freelance'
        }
      ]
    };
  }
};
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
  background: #f6f7fb;
}
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.header-actions {
  display: flex;
  gap: 10px;
}
.search-input {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.export-btn {
  background: #7c3aed;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
}
.card-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.card {
  background: white;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  flex: 1;
}
.tag {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 4px;
}
.tag.blue {
  background: #e0f2ff;
  color: #0284c7;
}
.tag.orange {
  background: #fff7ed;
  color: #ea580c;
}
.chart-box {
  height: 300px;
  background: white;
  padding: 10px;
  border-radius: 12px;
}
.chart canvas {
  width: 100% !important;
  height: auto !important;
}
.tag.green {
  background: #dcfce7;
  color: #16a34a;
}
.main-section {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.performance-bars .bar {
  height: 10px;
  background: #eee;
  display: flex;
  margin-bottom: 10px;
  border-radius: 6px;
  overflow: hidden;
}
.performance-bars .task {
  background: #a78bfa;
}
.performance-bars .presence {
  background: #7dd3fc;
}
.performance-bars .meeting {
  background: #86efac;
}
.chart-box {
  height: 220px;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
}
.employee-table table {
  width: 100%;
  border-collapse: collapse;
}
.employee-table th, .employee-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  font-size: 14px;
}
.employee-table .badge.full-time {
  background: #d1fae5;
  color: #065f46;
  padding: 4px 8px;
  border-radius: 4px;
}
.employee-table .badge.freelance {
  background: #fef3c7;
  color: #92400e;
  padding: 4px 8px;
  border-radius: 4px;
}
.employee-table .badge.intern {
  background: #fef3c7;
  color: #92400e;
  padding: 4px 8px;
  border-radius: 4px;
}
.table-header {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.table-header input, .table-header select {
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.attendance-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 0;
  list-style: none;
}
.attendance-list li {
  background: #f1f5f9;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
}
.info-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.info-block p {
  background: #f9fafb;
  padding: 10px 14px;
  border-radius: 6px;
  flex: 1 1 45%;
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
</style>