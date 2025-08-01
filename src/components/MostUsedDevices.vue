<template>
  <div class="card h-100 border-0 shadow-sm">
    
    <div class="card-header bg-white border-0 d-flex justify-content-between align-items-center">
      <h6 class="fw-bold mb-0">Today Used Devices</h6>
      <button class="btn btn-sm btn-outline-light text-muted border-0">
        <i class="bi bi-three-dots"></i>
      </button>
    </div>

    
    <div class="card-body d-flex align-items-center justify-content-between">
      
      <div class="position-relative" style="width: 120px; height: 60px;">
        <canvas ref="deviceChart" width="120" height="60"></canvas>
        <div
          class="position-absolute top-50 start-50 translate-middle text-center"
          style="margin-top: 12px;"
        >
          <div class="fw-bold fs-4">100</div>
          <small class="text-muted">Overall</small>
        </div>
      </div>

      
      <div class="ms-3">
        <div class="d-flex align-items-center mb-2">
          <span
            class="legend-dot me-2"
            style="background-color: #6c5ce7;"
          ></span>
          <small class="me-auto">Macbook</small>
          <small class="fw-bold">80</small>
        </div>
        <div class="d-flex align-items-center mb-2">
          <span
            class="legend-dot me-2"
            style="background-color: #fdcb6e;"
          ></span>
          <small class="me-auto">Keyboard</small>
          <small class="fw-bold">13</small>
        </div>
        <div class="d-flex align-items-center">
          <span
            class="legend-dot me-2"
            style="background-color: #e17055;"
          ></span>
          <small class="me-auto">Headphones</small>
          <small class="fw-bold">07</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MostUsedDevices',
  mounted() {
    this.drawChart()
  },
  methods: {
    drawChart() {
      const canvas = this.$refs.deviceChart
      const ctx = canvas.getContext('2d')
      const centerX = canvas.width / 2
      const centerY = canvas.height
      const radius = 50

      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const total = 100
      const data = [
        { value: 80, color: '#6c5ce7' },   
        { value: 13, color: '#fdcb6e' },   
        { value: 7, color: '#e17055' }     
      ]

      let currentAngle = Math.PI 

      data.forEach((item) => {
        const percentage = item.value / total
        const endAngle = currentAngle + (Math.PI * percentage)

        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, currentAngle, endAngle)
        ctx.strokeStyle = item.color
        ctx.lineWidth = 8
        ctx.lineCap = 'round'
        ctx.stroke()

        currentAngle = endAngle
      })
    }
  }
}
</script>

<style scoped>
.legend-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>
