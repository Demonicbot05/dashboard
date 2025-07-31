<template>
  <div class="card p-3 shadow-sm">
    <div class="d-flex justify-content-between mb-2">
      <h6 class="fw-bold">Income Statistics</h6>
      <small class="text-muted">Advance Filter</small>
    </div>
    <canvas ref="incomeChart" style="max-height: 300px; width: 100%;"></canvas>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'IncomeStatistics',
  setup() {
    const incomeChart = ref(null);

    const createDiagonalPattern = (ctx, color) => {
      const patternCanvas = document.createElement('canvas');
      patternCanvas.width = 10;
      patternCanvas.height = 10;
      const patternCtx = patternCanvas.getContext('2d');

      patternCtx.strokeStyle = color;
      patternCtx.lineWidth = 2;
      patternCtx.beginPath();
      patternCtx.moveTo(0, 10);
      patternCtx.lineTo(10, 0);
      patternCtx.stroke();

      return ctx.createPattern(patternCanvas, 'repeat');
    };

    onMounted(() => {
      const ctx = incomeChart.value.getContext('2d');

      const patternFill = createDiagonalPattern(ctx, '#63B3FF');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Income',
              data: [3000, 4000, 5000, 7000, 11000, 5000, 4500, 4700, 4900, 6000, 5800, 6200],
              backgroundColor: '#6C63FF',
              borderRadius: 8,
              barThickness: 30,
              stack: 'Stack 0'
            },
            {
              label: 'Expense',
              data: [1500, 2000, 2500, 3000, 2000, 1800, 1600, 1700, 2000, 1900, 1700, 2100],
              backgroundColor: patternFill,
              borderRadius: 8,
              barThickness: 30,
              stack: 'Stack 0'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
              grid: { display: false }
            },
            y: {
              stacked: true,
              beginAtZero: true,
              ticks: {
                callback: value => `$${value / 1000}k`
              },
              max: 13000
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.dataset.label}: $${context.parsed.y.toLocaleString()}`;
                }
              }
            },
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 12,
                padding: 15
              }
            }
          }
        }
      });
    });

    return { incomeChart };
  }
};
</script>

<style scoped>
.card {
  height: 350px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  background-color: white;
}
canvas {
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
