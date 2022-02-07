<template>
  <div>
    <h1>
      如何在vue 里使用 echarts
    </h1>
    <vue-echarts :option="option" :loading="loading"></vue-echarts>
    <button @click="loadMore">加载更多</button>
  </div>
</template>
<script>
import VueEcharts from './vue-echarts.vue'

export default {
  data() {
    return {
      loading: false,
      option: {
        title: {
          show: true,
          text: 'bug数',
          right: 20,
        },
        legend: {
          data: ['bug数']
        },
        xAxis: {
          type: 'category',
          data: ['2022-2-1', '2022-2-2']
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          show: true
        },
        series: [
          {
            lineStyle: {
              color: 'blue'
            },
            name: '金额',
            data: [1, 2],
            type: 'line'
          }]
      }
    }
  },
  components: {VueEcharts},
  methods: {
    loadMore() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.option = {
          xAxis: {
            data: ['2022-2-1', '2022-2-2', '2022-2-3']
          },
          series: [{
            data: [1, 2, 3]
          }]
        }
      }, 3000)
    }
  }
}
</script>