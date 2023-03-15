<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6" :lg="{span: '24-5'}">
        <el-card>
          <Detail title="月总碳排" count=" 232000">
              <template slot="charts">
                <span>月同比5.7% <i class="el-icon-top"></i></span>
                <span>周同比1.6%<i class="el-icon-bottom"></i></span>
              </template>
              <template slot="footer">
                <span>本周碳排量 8544</span>
              </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6" :lg="{span: '24-5'}">
        <el-card>
          <Detail title="周碳排量" count="8860">
            <template slot="charts">
                <linChart></linChart>
            </template>
            <template slot="footer">
              <span>今日碳排量 1234</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6" :lg="{span: '24-5'}">
        <el-card>
          <Detail title="周接单量" count="9987">
            <template slot="charts">
                <barChart></barChart>
            </template>
            <template slot="footer">
              <span>今日接单量 234</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6" :lg="{span: '24-5'}">
        <el-card>
          <Detail title="生产进度" count="75%">
            <template slot="charts">
                <progressChart></progressChart>
            </template>
            <template slot="footer">
              <span>生产进度 75%</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6" :lg="{span: '24-5'}">
        <el-card>
          <Detail title="订单状态" count="0">
            <template slot="charts">
                <pieChart></pieChart>
            </template>
            <template slot="footer">
              <span>已完成量 25%</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from './Detail'
import linChart from './lineCharts'
import barChart from './barCharts'
import progressChart from './progressCharts'
import pieChart from './pieCharts'
export default {
  name:'',
  components:{
    Detail,
    linChart,
    barChart,
    progressChart,
    pieChart
  }
}
</script>

<style scoped>
@media (min-width: 400px) {
    .el-col-lg-24-5 {
        margin-bottom: 10px;
        width: 100%;
    }
}
@media (min-width: 666px) {
    .el-col-lg-24-5 {
        margin-bottom: 10px;
        width: 50%;
    }
}
@media (min-width: 715px) {
    .el-col-lg-24-5 {
        margin-bottom: 10px;
        width: 33.3%;
    }
}
@media  (min-width: 992px) {
    .el-col-lg-24-5 {
        width: 20%;
    }
}
</style>
