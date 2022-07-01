<template>
  <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
</template>

<script>

export default {
  name: 'BarChart',
  data() {
    return {
      series: [{
            data: [44, 55, 13, 43, 22]
          }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['Contest A', 'Contest B', 'Contest C', 'Contest D', 'Contest E'],
            }
          },
    }
  }
}
</script>
