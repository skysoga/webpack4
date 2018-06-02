<template>
  <footer class="app-footer">
    <div class="text-center">
      <p>厦门八达有限公司 版权所有 2017 湘ICP备8888888 </p>
      <p>公司地址：福建省厦门市XXX区</p>
    </div>
</footer>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style scoped="">
  @import '～@/css/variable.css';
  .app-footer{
    padding: 4rem  1rem 1rem;
    background: rgba(0,0,0,.8);
    min-width: 320px;
    & p{
      font-size: 12px;
      margin-bottom: 6px;
      color: var(--color-secondary);
    }
  }
  @media only screen and (max-width: 640px) {
  	.app-footer{
      padding: 1rem  1rem 10px;
    }
  }
</style>
