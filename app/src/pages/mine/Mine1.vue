<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @row-click="handleclick"
      :row-style="rowClass"
      row-key="id"
    >
      <el-table-column type="selection"> </el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectRow: [],
      multipleSelection: [],
      tableData3: [
        {
          id: 0,
          name: "123",
          sex: "man",
          age: 12
        },
        {
          id: 1,
          name: "123",
          sex: "man",
          age: 12
        },
        {
          id: 2,
          name: "123",
          sex: "man",
          age: 12
        }
      ]
    };
  },
  watch: {
    multipleSelection(data) {
      //存储选中的row
      this.selectRow = [];
      if (data.length > 0) {
        data.forEach((item, index) => {
          this.selectRow.push(item.id);
        });
      }
    }
  },
  methods: {
    rowClass({ row, rowIndex }) {
      //对所选行进行样式设置，最终效果就看这里了
      if (this.selectRow.includes(row.id)) {
        return { "background-color": "rgba(185, 221, 249, 0.75)" };
      }
    },
    rowclick(row) {
      //实现点击多选
      this.$refs.equtable.toggleRowSelection(row);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleclick() {}
  }
};
</script>

<style>
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background: #00bbee;
  color: #ffffff;
}
.el-table__body tr.current-row > td {
  background-color: #00bbee !important;
}
</style>
