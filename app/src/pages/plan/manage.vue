<template>
  <div>
    <div class="top-cont">
      <el-input
        v-model="userName"
        clearable
        @clear="handleClear()"
        style="width:200px;margin-right:10px"
      ></el-input>
      <el-button @click="handleSearch" type="primary" size="small"
        >查询</el-button
      >
      <el-button size="small" @click="handleAdd">新增</el-button>
    </div>
    <div class="table-cont">
      <el-table :data="userList" style="width: 100%" border v-loading="loading">
        <el-table-column prop="id" label="ID" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="age" label="年龄" align="center">
        </el-table-column>
        <el-table-column prop="account" label="账号" align="center">
        </el-table-column>
        <el-table-column prop="password" label="密码" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center" min-width="200">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              type="warning"
              size="small"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="model-cont">
      <el-dialog :visible.sync="addModel">
        <el-form label-width="50px">
          <el-form-item
            label="姓名"
            required
            :show-message="true"
            inline-message
          >
            <el-input v-model="form.name" placeholder="请输入内容"> </el-input>
          </el-form-item>
          <el-form-item label="年龄" :show-message="false">
            <el-input v-model="form.age" placeholder="请输入内容"> </el-input>
          </el-form-item>
          <el-form-item
            label="账号"
            required
            :show-message="true"
            inline-message
          >
            <el-input v-model="form.account" placeholder="请输入内容">
            </el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            required
            :show-message="true"
            inline-message
          >
            <el-input v-model="form.password" placeholder="请输入内容">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addSubmit">提交</el-button>
            <el-button @click="addCancle">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "yearPlan",
  data() {
    return {
      userList: [], // 渲染数据表
      userName: "", // 按名字查询的字段
      addModel: false, // 弹框
      form: {
        // 弹框的表单数据
        name: "", // 姓名
        age: undefined, // 年龄
        account: "", // 账号
        password: "" // 密码
      },
      loading: true // 加载动画
    };
  },
  methods: {
    // 获取数据
    getData() {
      this.$axios
        .get(`/test/getUserList?name=${this.userName}`)
        .then(res => {
          this.userList = res.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 查询按钮
    handleSearch() {
      this.getData();
    },
    // 删除按钮
    handleDelete(index, row) {
      this.$confirm("您是否要删除" + row.name, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            method: "post",
            url: "/test/delUser",
            data: {
              id: row.id
            }
          })
            .then(res => {
              this.$message.success("删除成功");
              this.getData();
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(() => {});
    },
    // 新增按钮，弹出表单
    handleAdd() {
      this.form = {};
      this.addModel = true;
    },
    // 新增表单的提交
    addSubmit() {
      if (this.form.id) {
        this.$axios({
          method: "post",
          url: "/test/updateUser",
          data: this.form
        })
          .then(res => {
            if (res.data.status == "success" && res.data.statusCode == "0000") {
              this.$message.success("编辑成功");
              this.addModel = false;
              this.getData();
            } else {
              this.$message.error("编辑失败");
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.$axios({
          method: "post",
          url: "/test/addUser",
          data: this.form
        })
          .then(res => {
            if (res.data.status == "success" && res.data.statusCode == "0000") {
              this.$message.success("添加成功");
              this.addModel = false;
              this.getData();
            } else {
              this.$message.error("添加失败");
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    // 弹框中的取消
    addCancle() {
      this.addModel = false;
    },
    // 编辑按钮
    handleEdit(index, row) {
      this.addModel = true;
      this.form = row;
    },
    handleClear() {
      this.getData();
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.top-cont {
  display: flex;
  margin-bottom: 20px;
}
</style>
