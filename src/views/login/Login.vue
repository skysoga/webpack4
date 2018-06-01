<template>
  <section class="contain">
    <div class="logo"><a><span></span></a></div>
    <div class="login-contain">
        <h1><a href="">老马识途</a></h1>
        <el-form :model="loginForm" ref="loginForm" label-width="0">
          <el-form-item
            prop="acconts"
            :rules="[
              { required: true, message: '请输入账号', trigger: 'blur' }
            ]"
          >
            <el-input v-model="loginForm.acconts" placeholder="请输入账号..."></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            :rules="[
              { required: true, message: '请输入密码', trigger: 'blur' }
            ]"
          >
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码..."></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="expanded" type="primary" @click="submitForm('loginForm')">立即登录</el-button>
          </el-form-item>
        </el-form>

      <div class="row">
        <div class="small-24 column btns">
          <a class="float-left">忘记密码？</a>
          <a class="float-right">加入我们</a>
        </div>
      </div>
      <div class="third-party-login">
          <ul class="row small-up-3 medium-up-3 large-up-3">
            <li class="column"><i class="fa fa-weixin"></i><a>微信登录</a></li>
            <li class="column"><i class="fa fa-qq"></i><a>QQ登录</a></li>
            <li class="column"><i class="fa fa-weibo"></i><a>微博登录</a></li>
          </ul>
        </div>
      </div>
  </section>
</template>
<script>
  import { loginByUsername } from '@/api'
  export default {
    data () {
      return {
        loading: false,
        errdata: '',
        loginForm: {
          acconts: '',
          password: ''
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.fetchInfo()
          } else {
            console.log('error submit!!');
            return false
          }
        })
      },
      fetchInfo () {
        this.loading = true
        loginByUsername(this.loginForm).then((res) => {
          console.log(res)
          if (parseInt(res.code) === 0) {
            this.loading = false
            this.$store.dispatch('LOGINBYUSERNAME', this.loginForm)
            this.$router.push({ path: '/' })
          } else {
            this.$message.error(res.description);
          }
        }).catch(() => {
          this.loading = false
        })
      }
    }
  }
</script>
