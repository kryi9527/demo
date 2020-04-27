var express = require('express');
var router = express.Router();
var db = require("../config/db");
const uuid = require('node-uuid')
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/**
 * 登录
 */
router.post('/login', (req, res) => {
  let account = req.body.loginname;
  let password = req.body.password;
  let sql = `select * from user where account = '${account}' and password = '${password}'`
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error)
      return
    } else {
      if (result == '') {
        console.log("用户名或密码输入错误");
        res.json({
          status: "success",
          statusCode: "0000",
          message: "用户名或密码输入错误",
          data: null
        })
      } else {
        console.log("用户名和密码输入正确");
        res.json({
          status: "success",
          statusCode: "0000",
          message: "登录成功",
          data: result[0]
        })
      }
    }
  })

})

/**
 * 获取用户列表
 */
router.get('/getUserList', (req, res) => {
  let name = req.query.name;
  let sql;
  if (name) {
    sql = `select * from user where name = '${name}' order by name`;
  } else {
    sql = `select * from user order by name`
  }
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      return
    } else {
      res.json({
        status: "success",
        statusCode: "0000",
        data: result
      })
    }
  })
})

/**
 * 添加用户
 */
router.post('/addUser', (req, res) => {
  let user = {
    id: uuid.v1(),
    name: req.body.name,
    age: req.body.age,
    account: req.body.account,
    password: req.body.password
  }
  let sql = `insert into user values ('${user.id}','${user.name}',${user.age},'${user.account}','${user.password}')`
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log("添加成功")
      res.json({
        status: "success",
        statusCode: "0000",
        message: "添加成功"
      })
    }
  })
})

/**
 * 删除用户
 */
router.post('/delUser', (req, res) => {
  let delData = {
    id: req.body.id
  }
  let sql = `delete from user where id = '${delData.id}'`;
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      return;
    } else {
      res.json({
        status: "success",
        statusCode: "0000",
        message: "删除成功"
      })
    }
  })
})

/**
 * 修改用户
 */
router.post('/updateUser', (req, res) => {
  let updateData = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    account: req.body.account,
    password: req.body.password
  }
  let sql = `update user set 
  name = '${updateData.name}',age = '${updateData.age}',
  account='${updateData.account}',password='${updateData.password}' where id = '${updateData.id}'`;
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      return;
    } else {
      res.json({
        status: "success",
        statusCode: "0000",
        message: "修改成功"
      })
    }
  })
})


module.exports = router;