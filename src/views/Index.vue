<template>
  <div id="app">
    <app-header></app-Header>
    <div class="wrapper">
      <app-sidebar></app-sidebar>
      <div class="frame_content" >
        <transition @enter="onEnter" @leave="onLeave">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/views/include/AppHeader'
import AppSidebar from '@/views/include/AppSidebar'
export default {
  name: 'app',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    onEnter () {
      this.loading = false
    },
    onLeave () {
      this.loading = true
    }
  },
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>
<style src="../assets/css/master.css"></style>
<style>
.wrapper{
  position: relative;
}
.frame_content {
  position: absolute;
  left: 180px;
  right: 0;
  width: auto;
  transition: left .3s;
  height: calc(100vh - 50px);
  overflow: hidden;
}
</style>

