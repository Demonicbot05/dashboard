<template>
  <aside class="sidebar">
    <h2>SpectroNovaSoft</h2>

    <nav>
      <ul>
        <li><i>🏠</i> Dashboard</li>
        <li><i>📁</i> Projects</li>
        <li><i>🗓️</i> Calendar</li>
        <!-- ... -->

        <p class="menu-heading">TEAM MANAGEMENT</p>
        <li><i>📊</i> Performance</li>
        <li><i>📄</i> Invoices</li>

        <p class="menu-heading">LIST</p>
        <li><i>💰</i> Salary Info</li>
        <li><i>🧾</i> Compensation</li>
      </ul>
    </nav>
  </aside>
</template>


<style scoped>
.sidebar {
  width: 220px;
  background: white;
  border-right: 1px solid #ddd;
  padding: 30px 20px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #805ad5;
  margin-bottom: 30px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 15px 0;
  font-size: 15px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
</style>
