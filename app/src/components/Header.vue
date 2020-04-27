<template>
  <div class="header">
    <div class="header-start">
      <div
        class="btn"
        @click="handleClose"
        v-if="this.$store.state.asideWidth == '200px'"
      >
        <i class="el-icon-s-fold"></i>
      </div>
      <div
        class="btn"
        @click="handleOpen"
        v-if="this.$store.state.asideWidth == '120px'"
      >
        <i class="el-icon-s-unfold"></i>
      </div>
    </div>
    <div class="header-center">
      <h3>{{ this.$store.state.title }}</h3>
    </div>
    <div class="header-end">
      <el-avatar
        icon="el-icon-user-solid"
        style="margin-right:10px"
      ></el-avatar>
      <el-dropdown @command="handleCommand" style="cursor: pointer;" hover>
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人信息</el-dropdown-item>
          <el-dropdown-item command="b">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClose() {
      this.$store.commit("close");
    },
    handleOpen() {
      this.$store.commit("open");
    },
    handleCommand(command) {
      if (command == "a") {
        this.$message({
          type: "success",
          message: "个人信息",
          duration: 1000
        });
      } else if (command == "b") {
        this.$message({
          type: "success",
          message: "个人信息",
          duration: 1000
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-start {
    cursor: pointer;
    .btn {
      color: #fff;
      font-size: 30px;
    }
  }
  .header-center {
    font-size: 24px;
  }
  .header-end {
    display: flex;
    align-items: center;
  }
}
</style>
