<template>
  <section class="side-nav" :class="{'collapse': isCollapse}">
    <div class="el-menu-toggle">
      <a @click="isCollapse = !isCollapse"><i class="el-icon-menu"></i></a>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :default-active="$route.path"
      :collapse="isCollapse"
      :router="true"
      :collapse-transition="false"
    >
      <el-menu-item index="/admin">
        <i class="el-icon-setting margin-r6"></i>
        <span slot="title">网站管理</span>
      </el-menu-item>
      <el-menu-item index="/admin/users">
        <i class="el-icon-info"></i>
        <span slot="title">客户管理</span>
      </el-menu-item>
      <el-menu-item index="/admin/orders">
        <i class="el-icon-refresh"></i>
        <span slot="title">交易管理</span>
      </el-menu-item>
      <el-menu-item index="/admin/activity/">
        <i class="el-icon-date"></i>
        <span slot="title">活动管理</span>
      </el-menu-item>
      <el-menu-item index="/admin/reports">
        <i class="el-icon-document"></i>
        <span slot="title">报表管理</span>
      </el-menu-item>
    </el-menu>
  </section>
</template>

<script>
export default {
  components: {
  },
  computed: {
  },
  data () {
    return {
      menus: [
        {
          name: '平台管理',
          menus: [
            {
              name: '内容管理',
              path: '/cm'
            },
            {
              name: '用户管理',
              path: '/user'
            }
          ]
        }
      ],
      isCollapse: false
    }
  },
  created () {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.el-menu-toggle{
  height: 49px;
  line-height: 49px;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0,0,0,.2);
  margin-bottom: 1px;
  font-size: 18px;
}
.side-nav {
  width: 180px;
  position: fixed;
  left: 0;
  top: 0;
  margin-top: 50px;
  height: 100%;
  overflow: hidden;
  transition: width 0.3s,transform 0.3s;
  border-right: solid 1px #e6e6e6;
  &.collapse {
    width: 64px;
  }
  & .el-submenu .el-menu-item{
    min-width: inherit;
  }
  & .el-menu {
    border-right: none;
  }
}
</style>
