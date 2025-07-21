<template>
  <div class="card">
    <div class="card-header">
      <span class="icon">📊</span>
      <h3>Attendance</h3>
    </div>
    <p class="number">93%</p>
    <p class="note">Based on last 30 days</p>
  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #444;
}

.icon {
  font-size: 20px;
}

.number {
  font-size: 28px;
  font-weight: bold;
  color: #34d399;
  margin-bottom: 4px;
}

.note {
  font-size: 13px;
  color: #888;
}
</style>
