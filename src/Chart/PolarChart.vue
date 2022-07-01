<template>
  <apexchart type="polarArea" height="380" :options="chartOptions" :series="series"></apexchart>
</template>

<script>

export default {
  name: 'PolarChart',
  data() {
    return {
      series: [44, 55, 13, 43, 22],
          chartOptions: {
            chart: {
              width: 380,
              type: 'polarArea'
            },
            labels: ['Contest A', 'Contest B', 'Contest C', 'Contest D', 'Contest E'],
            fill: {
              opacity: 1
            },
            stroke: {
              width: 1, 
            },
            yaxis: {
              show: false
            },
            legend: {
              position: 'bottom'
            },
            plotOptions: {
              polarArea: {
                rings: {
                  strokeWidth: 0
                },
                spokes: {
                  strokeWidth: 0
                },
              }
            },
            theme: {
              monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6
              }
            }
          },
    }
  }
}
</script>
