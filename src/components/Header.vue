<template>
  <header class="bg-white border-bottom px-4 py-3">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <div class="d-flex align-items-center gap-3">
        <!-- Search -->
        <div class="position-relative">
          <input 
            type="text" 
            class="form-control" 
            placeholder="Quick Search..." 
            style="padding-left: 35px; width: 250px;"
          >
          <i class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-2 text-muted"></i>
        </div>

        <!-- Notifications -->
        <button class="btn btn-outline-light text-muted border-0">
          <i class="bi bi-envelope fs-5"></i>
        </button>

        <!-- Export -->
        <button class="btn btn-outline-light text-muted border-0">
          <i class="bi bi-box-arrow-up-right fs-5"></i>
        </button>

        <!-- User avatars -->
        <div class="d-flex">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23ff6b6b'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E" 
               class="rounded-circle me-1" width="32" height="32" alt="User 1">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%234ecdc4'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E" 
               class="rounded-circle me-1" width="32" height="32" alt="User 2">
          <div class="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white small me-2" 
               style="width: 32px; height: 32px;">+10</div>
        </div>

        <!-- Invite button -->
        <button class="btn btn-outline-primary">
          <i class="bi bi-person-plus me-1"></i>
          Invite
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
</style>