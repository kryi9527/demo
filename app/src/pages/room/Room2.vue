<template>
  <div class="card-cont">
    <el-card v-for="i in 20" :key="i">{{ i }}</el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.card-cont {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  .el-card {
    height: 400px;
    // width: 300px;
  }
}
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .card-cont {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 992px) {
  .card-cont {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
