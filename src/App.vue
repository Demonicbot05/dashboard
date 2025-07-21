<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="main-content">
      <!-- Topbar -->
      <Topbar />

      <!-- Dashboard Content -->
      <Dashboard />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Topbar,
    Dashboard
  }
}
</script>

<style scoped>
.app {
  display: flex;
  height: 100vh;
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f7f8fa;
  padding: 20px;
  overflow-y: auto;
}
</style>
