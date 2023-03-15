<template>
    <div class="charts" ref="charts"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name:'',
    mounted(){
        let pieChart = echarts.init(this.$refs.charts);
        pieChart.setOption({
        series : [
            {
                type: 'pie',
                radius: '100%',
                roseType: 'angle',
                data:[
                    {value:213, name:'已接单'},
                    {value:274, name:'生产中'},
                    {value:310, name:'带交付'},
                    {value:335, name:'已完成'},
                ],
                label: { // 去除文字和箭头
                    normal: {
                        position: 'inner',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    })
    }
}

</script>


<style scoped>
    .charts {
    width: 100%;
    height: 100%;
    }
</style>

