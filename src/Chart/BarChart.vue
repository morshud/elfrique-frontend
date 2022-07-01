<template>
  <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
import VoteService from "../service/vote.service";
export default {
  name: 'BarChart',
  data() {
    return {
      series:'',
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
              categories: contestant,
            }
          }
      //this.chartOptions = 
    });
    this.getSeries();
  },
  methods: {
    getSeries(){
        VoteService.getSingleContest(this.$route.params.id).then((response) => {
            let vote = response.data.voteContest.contestants.map(a => a.voteCount);
            this.series =  [{
            data: vote
          }]
        })
        

    }
  }
}
</script>
