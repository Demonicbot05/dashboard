<template>
  <div>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
          {
            label: 'Income',
            backgroundColor: '#7B61FF',
            data: [3000, 5000, 4000, 7000, 9000, 6000, 5000, 4000, 6000, 3000, 5000, 4000]
          },
          {
            label: 'Expense',
            backgroundColor: '#D1C4E9',
            data: [1500, 2500, 2000, 3000, 4000, 3500, 2000, 1800, 3000, 1200, 2500, 2100]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  }
};
</script>

<style scoped>
div {
  height: 300px;
}
</style>
