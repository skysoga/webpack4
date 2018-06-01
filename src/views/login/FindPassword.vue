<template>
  <section class="contain">
    <div class="logo"><a><span></span></a></div>
    <div class="login-contain">
      <form>
        <h1><a href="">老马识途</a></h1>  
        <div class="row">
          <div class="small-24 column">
            <label class="login-name">
              <el-input v-model="acconts" placeholder="请输入账号..."></el-input>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="small-24 column">
            <label class="login-password">
              <el-input v-model="password" placeholder="请输入密码..."></el-input>
          </label>
          </div>
        </div>
        <div class="checkout-error">
          <span class="error">请输入有效用户名！</span>
        </div>
        <div class="row">
          <div class="small-24 columns">
            <el-button type="primary" size="tiny" class="expanded" id="login">
              <i class="fa fa-spinner fa-spin"></i>立即登录
            </el-button>
          </div>
        </div>
        <div class="row">
          <div class="small-24 column btns">
        <a class="float-left" id="resetPassword">忘记密码？</a>
        <a class="float-right" data-href="register.html" id="register">加入我们</a>
      </div>
        </div>
      </form>
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
  export default {
    data () {
      return {}
    }
  }
</script>
