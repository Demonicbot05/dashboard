<template>
  <div class="topbar">
    <div class="left">
      <h2>Dashboard</h2>
      <input type="text" placeholder="Search..." class="search" />
    </div>
    <div class="right">
      <button class="export-btn">Export</button>
      <img src="/profile.jpg" class="avatar" alt="User" />
    </div>
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.left {
  display: flex;
  gap: 12px;
  align-items: center;
}

.search {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
}

.export-btn {
  background-color: #7f56d9;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: 12px;
}
</style>
