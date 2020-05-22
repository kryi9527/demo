<template>
  <div>
    <ve-histogram
      :data="chartData"
      :extend="chartExtend"
      :colors="colors"
      ref="demo"
      v-if="show"
    >
    </ve-histogram>

    <ve-histogram
      v-if="!show"
      :data="chartData1"
      :extend="chartExtend"
      ref="demo"
      :colors="colors"
    >
    </ve-histogram>
    <el-button @click="handleClick">改变</el-button>
  </div>
</template>

<script>
export default {
  data() {
    this.colors = ["#32c0e0", "#e4a420"];
    this.chartExtend = {
      series(v) {
        v.forEach(i => {
          i.barWidth = 15;
          i.itemStyle = {
            barBorderRadius: [15, 15, 0, 0],
            shadowColor: "rgba(50, 192, 224, 0.2)", //	阴影颜色
            shadowBlur: 5, //	阴影模糊大小
            shadowOffsetX: 4 // 阴影水平方向上的偏移距离。
          };
        });
        return v;
      },
      tooltip(v) {
        v.trigger = "none";
        return v;
      }
    };
    return {
      chartData: {
        columns: ["类型", "带电作业", "停电作业"],
        rows: [
          { 类型: "输电", 带电作业: 20, 停电作业: 22 },
          { 类型: "变电", 带电作业: 50, 停电作业: 22 },
          { 类型: "电缆", 带电作业: 11, 停电作业: 22 },
          { 类型: "配电", 带电作业: 34, 停电作业: 22 }
        ]
      },
      chartData1: {
        columns: ["地区", "人数"],
        rows: [
          { 地区: "输电", 人数: 20 },
          { 地区: "变电", 人数: 50 },
          { 地区: "电缆", 人数: 11 },
          { 地区: "配电", 人数: 34 }
        ]
      },
      flag: false,
      show: true
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
      console.log(this.show);
      if (this.show) {
        this.$refs.demo.width = "600px";
      } else {
        this.$refs.demo.width = "800px";
      }
    }
  }
};
</script>
<style lang="less" scoped></style>
