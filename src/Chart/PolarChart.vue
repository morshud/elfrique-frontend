<template>
  <apexchart
    type="polarArea"
    height="380"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
import VoteService from "../service/vote.service";
export default {
  name: "PolarChart",
  data() {
    return {
      series: '',
      chartOptions: ''
    };
  },
  created() {
    VoteService.getSingleContest(this.$route.params.id).then((response) => {
      this.contest = response.data.voteContest;
      this.endDate = response.data.voteContest.closedate;
      let contestant = response.data.voteContest.contestants.map(
        (a) => a.fullname
      );
      this.chartOptions = {
        chart: {
          width: 380,
          type: "polarArea",
        },
        labels: contestant,
        fill: {
          opacity: 1,
        },
        stroke: {
          width: 1,
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "bottom",
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
            spokes: {
              strokeWidth: 0,
            },
          },
        },
        theme: {
          monochrome: {
            enabled: true,
            shadeTo: "light",
            shadeIntensity: 0.6,
          },
        },
      }
      //this.chartOptions =
    });
    this.getSeries();
  },
  methods: {
    getSeries() {
      VoteService.getSingleContest(this.$route.params.id).then((response) => {
        let vote = response.data.voteContest.contestants.map(
          (a) => a.voteCount
        );
        this.series = vote;
      });
    },
  },
};
</script>
