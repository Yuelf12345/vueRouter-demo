<template>
  <!-- 容器 -->
  <div class="charts" ref="charts"></div>
</template>

<script>
import *as echarts from 'echarts'
export default ({
  name:'',
  mounted(){
    let progressChart = echarts.init(this.$refs.charts);
    progressChart.setOption({
      xAxis:{
        show:true,
        min:0,
        max:100,
      },
      yAxis:{
        show:true,
        type:"category",
      },
      series:[
        {
          type:"bar",
          data:[78],
          color:"cyan",
          barWidth:10,
          color:"yellowgreen",
          showBackground:true,
          backgroundStyle:{
            color:"#eee",
          },
          label:{
            show:true,
            formatter:"|",
            position:"right"
          }
        }
      ],
      //布局调试
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
    })
  }
})
</script>

<style scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>
