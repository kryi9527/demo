<template>
  <el-container class="cont">
    <el-aside :width="this.$store.state.asideWidth"
      ><my_menu></my_menu>
    </el-aside>
    <el-container>
      <el-header>
        <my_header></my_header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import menu from "@/components/Menu";
import header from "@/components/Header";
export default {
  data() {
    return {
      menuList: []
    };
  },
  components: {
    my_menu: menu,
    my_header: header
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key);
    }
  },
  mounted() {
    // this.getParents();
    this.$router.push("/room1");
  }
};
</script>
<style scoped>
.cont {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  overflow: hidden;
}
.el-menu {
  background-color: #d3dce6;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
