<template>
  <apexchart type="pie" height="350" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import VoteService from "../service/vote.service";
export default {
  name: 'PieChart',
  data() {
    return {
      series: '',
      chartOptions: '',
    }
  },
  created(){
    VoteService.getSingleContest(this.$route.params.id).then((response) => {
      this.contest = response.data.voteContest;
      this.endDate = response.data.voteContest.closedate;
      let contestant = response.data.voteContest.contestants.map(a => a.fullname);
      this.chartOptions = {
        chart: {
          width: 200,
          type: 'bar',
        },
        labels: contestant,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
      //this.chartOptions = 
    });
    this.getSeries();
  },
  methods: {
    getSeries(){
        VoteService.getSingleContest(this.$route.params.id).then((response) => {
            let vote = response.data.voteContest.contestants.map(a => a.voteCount);
            this.series = vote
        })
        

    }
  }
}
</script>
