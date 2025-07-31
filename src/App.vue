<template>
  <div id="app">
    <div class="d-flex">
      <Sidebar />
      <div class="flex-grow-1">
        <Header />
        <Dashboard />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
    Dashboard
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f8f9fa;
}

#app {
  height: 100vh;
}

.sidebar {
  width: 250px;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.main-content {
  flex: 1;
  overflow-x: hidden;
}
</style>