<template>
  <div class="login-wrapper">
    <div class="main" role="main" aria-label="主体区块">
      <router-view></router-view>
    </div>
    <div class="footer login-footer" id="frame_footer">
        <div class="row" id="data_footer">
            <div class="copyright">
                © 2016&nbsp;
                <a href="http://www.miitbeian.gov.cn/"><img src="../../../static/img/icon-police.png" alt="" style="margin-right: 4px;position: relative;top: -1px;">闽ICP备16028505号-1</a>&nbsp;&nbsp;
                版权所有&nbsp;|
                <a href="#">xxx公司</a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
<style>
  .contain .logo{
    position: absolute;
    top: 40%;
    left: 194px;
    margin: -30px 0 0 -30px;
  }
  .login-wrapper {
    background: url(../../assets/img/bg.png) no-repeat;
    height: 100vh;
    background-size: 100% 100%;
    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(23, 42, 82, 0.8);
    }
  }
  .contain {
    width: 100%;
    max-width: 800px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 33%, rgba(140, 152, 204, 0.6) 51%, rgba(140, 152, 204, 0.8) 100%);
    height: 480px;
  }
  .login-contain, .register, .resetPassword {
    max-width: 320px;
    height: 100%;
    position: absolute;
    width: 50%;
    margin: auto;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    padding: 60px 20px 0;
    transform: translateX(0px);
    visibility: visible;
    opacity: 1;
    transition: transform .5s,visibility .3s,opacity .5s,height .3s;
}
.login-contain form, .register form, .resetPassword form {
    padding: 0 10px;
}
.login-contain h1, .register h1, .resetPassword h1{
    font-size: 24px;
    color: #8696a1;
    padding: 2px 0 30px 0;
    font-family: 'FranchiseRegular', 'Arial Narrow', Arial, sans-serif;
    font-weight: normal;
    text-align: center;
}
.login-contain .el-input__inner, .register input, .resetPassword input, .login-contain input:focus, .register input:focus, .resetPassword input:focus {
    border-width: 0 0 1px 0;
    font-size: 12px;
    text-align: center;
    box-shadow: none;
    border-radius: 0;
    height: 24px;
    margin-bottom: 0;
}
.checkout-error {
    text-align: center;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    transition: height 0.3s ease-out, visibility 0.2s 0.2s;
}
.checkout-error span {
    color: #ff4200;
    font-size: 12px;
}
.el-button.expanded {
    display: block;
    width: 100%;
    font-size: 12px;
    border-radius: 20px;
    margin: 0 0 1rem;

}
.btns a {
    font-size: 12px;
    transition: transform .4s;
}
.third-party-login {
    position: absolute;
    width: 100%;
    left: 0px;
    bottom: 0;
    padding: 0 10px;
    border-top: 1px solid #ddd;
}
.third-party-login ul{
  margin: 0;
  & li {
    list-style: none;
    padding: 4px 0;
    flex-grow: 1;
    text-align: center;
    & i {
      margin-right: 4px;
    }
  }
}
.third-party-login ul li i.fa-weixin {
    color: #28b779;
}
.third-party-login ul li a {
    font-size: 12px;
}
.third-party-login ul li i.fa-qq {
    color: #2199e8;
}
.third-party-login ul li i.fa-weibo {
    color: #ff4200;
}
.login-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}
.login-footer .copyright {
    float: none;
    text-align: center;
}
</style>
