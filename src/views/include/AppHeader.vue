<template>
  <header class="header">
    <div class="clearfix">
      <div class="large-12 column">
        <div class="logo">
          <a  href="#" title="统一管理平台">统一管理平台</a>
        </div>
      </div>
      <!--<div class="large-12 column no-padding">-->
        <!--<div class="navbar-top">-->
          <!--<ul class="">-->
            <!--<li class="media-object user" v-popover:user>-->
              <!--<div class="media-object-section">-->
                <!--<img class="img" src="../../../static/img/logo.png" alt="用户姓名"/>-->

              <!--</div>-->
              <!--<div class="media-object-section">-->
                <!--<el-popover-->
                  <!--ref="user"-->
                  <!--placement="bottom"-->
                  <!--width="318"-->
                  <!--trigger="click"-->
                  <!--content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">-->
                  <!--<div class="clearfix user-wrapper1">-->
                    <!--<div class="user-img">-->
                      <!--<a href=""><img src="../../../static/img/logo.png" alt="方文山"></a>-->
                    <!--</div>-->
                    <!--<div class="user-con">-->
                      <!--<div class="user-name">-->
                        <!--<a href="/login">用户名</a>-->
                      <!--</div>-->
                      <!--<div class="user-descript">软件开发部：前端工程师</div>-->
                      <!--<div class="uinfo-more">-->
                        <!--<a><span>查看个人资料</span></a>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="user-wrapper clearfix">-->
                    <!--<ul class="row large-up-4 medium-up-4 small-up-1 no-margin">-->
                      <!--<li class="column">-->
                        <!--<a href="#"><span class="fa fa-envelope-o"></span>消息<span class="font-info">6</span></a>-->
                      <!--</li>-->
                      <!--<li class="column">-->
                        <!--<a href="#"><span class="fa fa-bell-o"></span>通知<span class="font-alert">12</span></a>-->
                      <!--</li>-->
                      <!--<li class="column">-->
                        <!--<a href="#"><span aria-hidden="true" class="fa fa-question-circle"></span>帮助</a>-->
                      <!--</li>-->
                      <!--<li class="column">-->
                        <!--<a @click="loginOut()"><span class="fa fa-sign-out"></span>退出</a>-->
                      <!--</li>-->
                    <!--</ul>-->
                  <!--</div>-->
                <!--</el-popover>-->
                <!--<a class="name">用户名<i class="el-icon-caret-bottom"></i></a>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
    </div>

  </header>
</template>
<script>
  // import { getToken, removeToken } from '@/utils/auth'
  export default {
    data () {
      return {
        isOpen: false,
        index: 1,
        token: null
      }
    },
    created () {
      // this.token = getToken()
      // console.log('111', this.token)
    },
    methods: {
      // loginOut () {
      //   removeToken()
      //   this.token = getToken()
      //   console.log('222', this.token)
      // }
    },
    watch: {
      // token (nv) {
      //   console.log('tuichu')
      //   if (!nv) {
      //     this.$router.push({path:'/login'})
      //   }
      // }
    }
  }
</script>
<style>
  @import '../../assets/css/variable.css';
  .header{
    height: 50px;
    line-height: 50px;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
    background-color: var(--color-primary);
  }
  .media-object.user{
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    & .name{
      color: #fff;
      & i{
        margin-left: 6px;
      }
    }
    &:hover{
      background: color(var(--color-primary) tint(30%));
    }
  }
  .top-bar{
    & > li {
      position: relative;
      & > i.el-icon-arrow-down{
        font-size: 10px;
        color: var(--color-primary);
        position: absolute;
        top: 18px;
        right: 4px;
        height: 8px;
        transition: all .3s;
        z-index: 100;
      }
    }
  }
  @media only screen and (min-width: 769px) {
    .top-bar{
      & > li {
        & a {
          color: var(--color-primary);
          font-size: 13px;
          &:hover {
            color: color(var(--color-primary) shade(20%))
          }
        }
        & > i.el-icon-arrow-down{
          top: 20px;
          right: 10px;
        }
        & > ul{
          position: absolute;
          width: 160px;
          background: #333;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all .3s;
          right: 0;
          z-index: 100;
          & > li > a{
            transition: all .3s;
            font-size: 13px;
          }
          & > li:hover {
            background: color(#333 shade(20%));
            & a{
              transform: translateX(10px);
            }
          }
        }
        &:hover > ul{
          opacity: 1;
          visibility: visible;
          transform: translateY(4px);
        }
        &:hover i.el-icon-arrow-down{
          transform: rotateZ(180deg);
        }
      }
    }
    .top-bar{
      & > li {
        & > a{
          padding: 18px 1.6rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .header{
      height: 46px;
    }
    .top-bar{
      & > li {
        & > a{
          font-size: 13px;
          padding: 1rem 10px;
        }
      }
    }
    .mobile-menu {
      /*display: none;*/
      position: absolute;
      right: 0;
      top: 0;
      width: 46px;
      height: 46px;
      cursor: pointer;
      z-index: 1000;
    }
    .menu-patty {
      margin: -2px auto;
      width: 28px;
      height: 3px;
      border-radius: 2px;
      display: block;
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      background: #fff;
      -webkit-transition: -webkit-transform 0.2s ease;
      -o-transition: -o-transform 0.2s ease;
      transition: transform .2s ease;
    }
    .menu-patty:first-child {
      -webkit-transform: translateY(-9px);
      -ms-transform: translateY(-9px);
      -o-transform: translateY(-9px);
      transform: translateY(-9px);
    }
    .menu-patty:last-child {
      -webkit-transform: translateY(9px);
      -ms-transform: translateY(9px);
      -o-transform: translateY(9px);
      transform: translateY(9px);
    }
    .mobile-menu.is-open > .menu-patty {
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
    }
    .mobile-menu.is-open > .menu-patty:first-child {
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .mobile-menu.is-open > .menu-patty:last-child {
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    .mobile-content{
      visibility: hidden;
      -webkit-transition-delay: 0s;
      transition-delay: 0s;
      & > .menu {
        display: block;
        & > li {
          &:first-child{
            margin-top: 80px;
          }
        }
      }
      & .menu.vertical{
        display: none;
        &.active{
          display: block;
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .mobile-content{
      background: rgba(0,0,0,.9);
      position: absolute;
      z-index: 2;
      top: 46px;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 0;
      padding: 0 48px;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      overflow-y: auto;
      user-select: none;
      -webkit-overflow-scrolling: touch;
      visibility: hidden;
      transition: visibility 0s linear 1s;
      animation: ac-gn-list-searchshow 300ms both;
      & .top-bar > li {
        line-height: 42px;
        border-bottom: 1px solid #333;
        opacity: 0;
        pointer-events: none;
        transform: scale(1.1) translateY(-24px);
        transition: opacity 0.35s ease-out, -webkit-transform 0.35s ease-out;
        transition: opacity 0.35s ease-out, transform 0.35s ease-out;
        transition: opacity 0.35s ease-out, transform 0.35s ease-out, -webkit-transform 0.35s ease-out;
        & a{
          color: #fff;
          display: inline-block;
          padding: 0 1rem;
        }
        &:nth-child(2){
          transition-delay: 300ms,300ms;
        }
        &:nth-child(3){
          transition-delay: 350ms,350ms;
        }
        &:nth-child(4){
          transition-delay: 400ms,400ms;
        }
        &:nth-child(5){
          transition-delay: 450ms,450ms;
        }
        &:nth-child(6){
          transition-delay: 500ms,500ms;
        }
        &:nth-child(7){
          transition-delay: 550ms,550ms;
        }
      }
      & .menu.vertical li a{
        display: block;
        padding: 1rem 1rem 1rem 2rem;
        font-size: 13px;
      }
    }
    .mobile-content.is-open{
      visibility: visible;
      transition-delay: 0s;
      & .top-bar > li{
          opacity: 1;
          pointer-events: auto;
          transform: none;
      }
    }
  }
@keyframes ac-gn-list-searchshow {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-timing-function: cubic-bezier(1, 0, 0, 1)
    }

    100% {
        transform: translateY(-100%) translateY(calc(100% - 46px))
    }
}
.navbar-top{
  float: right;
}
.user .img{
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
  display: inline-block;
}
.user-wrapper1 {
  padding: 20px;
}
.user-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    float: left;
}
.user-img a {
    display: block;
}
.user-con {
    position: relative;
    padding: 0 0 15px 70px;
    border-bottom: 4px solid #ddd;
}
.user-name {
    font-size: 1.2rem;
}
.user-name a {
    width: 110px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: inherit;
}
.user-descript {
    font-size: 0.8rem;
    color: #adb9c8;
    margin-top: 5px;
}
.uinfo-more {
    position: absolute;
    right: 0;
    top: 0;
}
.user-wrapper ul, .user-wrapper .row {
    padding: 0 8px;
}
.user-wrapper ul li, .user-wrapper .row .column {
    padding: 0 4px 10px 4px;
    position: relative;
    list-style: none;
    text-align: center;
}
.el-dropdown-menu li a {
    display: block;
    padding: 0.5rem;
    color: #555555;
    transition: background .6s;
}
</style>
