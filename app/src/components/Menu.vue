<template>
  <el-menu
    index="qqmusic"
    :router="true"
    :unique-opened="true"
    default-active="room1"
    :style="{ width: this.$store.state.asideWidth }"
  >
    <el-submenu index="room" @click.native="handleClick('音乐馆')">
      <template slot="title">
        <div>
          音乐馆
        </div>
      </template>
      <el-menu-item index="room1">1</el-menu-item>
      <el-menu-item index="room2">2</el-menu-item>
      <el-menu-item index="room3">3</el-menu-item>
    </el-submenu>
    <el-submenu index="mine" @click.native="handleClick('我的音乐')">
      <template slot="title">
        <div>
          我的音乐
        </div>
      </template>
      <el-menu-item index="mine1">1</el-menu-item>
      <el-menu-item index="mine2">2</el-menu-item>
      <el-menu-item index="mine3">3</el-menu-item>
    </el-submenu>
    <el-submenu index="customer" @click.native="handleClick('客户端')">
      <template slot="title">
        <div>
          客户端
        </div>
      </template>
      <el-menu-item index="customer1">1</el-menu-item>
      <el-menu-item index="customer2">2</el-menu-item>
      <el-menu-item index="customer3">3</el-menu-item>
    </el-submenu>
    <el-submenu index="open" @click.native="handleClick('开放平台')">
      <template slot="title">
        <div>
          开放平台
        </div>
      </template>
      <el-menu-item index="open1">1</el-menu-item>
      <el-menu-item index="open2">2</el-menu-item>
      <el-menu-item index="open3">3</el-menu-item>
    </el-submenu>
    <el-submenu index="vip" @click.native="handleClick('VIP')">
      <template slot="title">
        <div>
          VIP
        </div>
      </template>
      <el-menu-item index="vip1">1</el-menu-item>
      <el-menu-item index="vip2">2</el-menu-item>
      <el-menu-item index="vip3">3</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 点击菜单
    handleClick(title) {
      this.$store.commit("setTitle", title);
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
.el-menu {
  background: none;
  height: 100%;
}
</style>
<style>
.el-submenu .el-menu-item {
  min-width: 100px !important;
}
</style>
