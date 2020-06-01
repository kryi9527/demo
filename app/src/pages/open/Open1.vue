<template>
  <div>
    <div class="top-cont">
      <el-input
        v-model="defaultData.bookName"
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
      <el-table :data="bookList" style="width: 100%" border v-loading="loading" :height="tableHeigth"
      >
        <!-- <el-table-column prop="id" label="ID" width="180" align="center"> -->
        </el-table-column>
        <el-table-column prop="name" label="书名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="author" label="作者" align="center">
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
      <el-pagination
        background
        layout="total,prev, pager, next"
         @current-change="handleCurrentChange"
        :current-page.sync="defaultData.pageIndex"
        :page-size="defaultData.pageSize"
        :total="total">
      </el-pagination>
    </div>
    <div class="model-cont">
      <el-dialog :visible.sync="addModel">
        <el-form label-width="50px">
          <el-form-item
            label="书名"
            required
            :show-message="true"
            inline-message
          >
            <el-input v-model="form.name" placeholder="请输入内容"> </el-input>
          </el-form-item>
          <el-form-item label="作者" :show-message="false">
            <el-input v-model="form.author" placeholder="请输入内容"> </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">提交</el-button>
            <el-button @click="handleCancle">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import{getBookList,addBook,delBook,updateBook} from '@/api/book'
export default {
  name: "yearPlan",
  data() {
    return {
      bookList: [], // 渲染数据表
      addModel: false, // 弹框
      form: {
        // 弹框的表单数据
        name: "", // 书名
        author:"", //作者
      },
      loading: false, // 加载动画
      total:0, // 获取到的表格数据的总数
      defaultData:{
        bookName:"", // 按用户名搜索
        pageindex:1, // 当前页
        pagesize:10 // 每页显示数据的数量
      },
      tableHeigth:window.innerHeight * 0.8 - 100
    };
  },
  methods: {
 
    // 分页
    handleCurrentChange(val){
      this.defaultData.pageindex = val;
      this.getData()
    },
    // 获取数据
    getData() {
      let data = {
        user_id:window.localStorage.getItem('userId'),
        name:this.defaultData.bookName,
        pageindex:this.defaultData.pageindex,
        pagesize:this.defaultData.pagesize,
      }
      
        getBookList(data)
        .then(res => {
          
          this.bookList = res.data.data.data;
          this.total = res.data.data.count
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
          let data = {
            id: row.id
          }
          
         delBook(data)
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
    // 表单的提交
    handleSubmit() {
      if (this.form.id) {
        updateBook(this.form)
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
        this.form.user_id = window.localStorage.getItem('userId')
        console.log(this.form);
       addBook(this.form)
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
    handleCancle() {
      this.addModel = false;
    },
    // 编辑按钮
    handleEdit(index, row) {
      this.addModel = true;
      this.form = row;
    },
    // 查询输入框的清除事件
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
.el-pagination{
  margin-top: 20px;
}
       
</style>
