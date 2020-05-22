<template>
  <div class="bg">
    <el-form class="form" ref="form" :rules="rules" :model="userInfo">
      <el-form-item label="用户名" prop="account">
        <el-input v-model="userInfo.account">
          <i slot="suffix" class="el-input__icon el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userInfo.password">
          <i slot="suffix" class="el-input__icon el-icon-unlock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "@/api/login";
export default {
  data() {
    return {
      userInfo: {
        account: "",
        password: ""
      },
      rules: {
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          let data = {
            loginname: this.userInfo.account,
            password: this.userInfo.password
          };
          login(data)
            .then(res => {
              if (res.status == 200) {
                if (res.data.statusCode == "1111") {
                  this.$message.error(res.data.message);
                } else {
                  this.$router.push("/main");
                  window.localStorage.setItem("userId", res.data.data.id);
                }
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scope>
.form {
  width: 50%;
  background: #fff;
  padding: 20px;
  height: 30%;
}
.bg {
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: url("../assets/img/bg.png");
}
</style>
