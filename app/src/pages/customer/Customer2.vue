<template>
  <ve-liquidfill :data="chartData" :settings="chartSettings"> </ve-liquidfill>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      seriesMap: {
        first: {
          color: ["red"],
          itemStyle: {
            opacity: 0.2
          },
          emphasis: {
            itemStyle: {
              opacity: 0.8
            }
          },
          backgroundStyle: {
            color: "yellow"
          },
          label: {
            formatter(options) {
              const { seriesName, value } = options;
              return `${seriesName}\n${value * 100}%`;
            },
            fontSize: 40,
            color: "green",
            insideColor: "red"
          }
        }
      }
    };
    return {
      chartData: {
        columns: ["level", "percent"],
        rows: [
          {
            percent: 0.32
          }
        ]
      }
    };
  }
};
</script>
