<template>
  <div>open3</div>
</template>

<script>
export default {
  methods: {
    test() {
      let arr = [123, 35, 34];
      arr.map(i => {
        return i + 1232132;
      });
      console.log(arr);
    }
  },
  created() {
    this.test();
  }
};
</script>

<style></style>
