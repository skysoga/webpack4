<template>
  <div class="product-navbar classify-navbar">
    <div class="tree-header">内容管理</div>
    <div class="accordion-list">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: []
      }
    },

    methods: {

    }
  }
</script>
<style>
.accordion-list .el-tree{
  padding: 1rem;
  background: none;
  border: none;
}
.product-navbar{
  background: #eaedf1;
  position: absolute;
  height: calc(100vh - 50px);
  width: 180px;
  transition: width .3s;
}
.accordion-header, .tree-header {
    font-size: 14px;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
    background: #D9DEE4;
    overflow: hidden;
    height: 50px;
    transition: opacity .2s .1s;
}
.foot-btn{position: absolute;bottom: 0;width: 100%;z-index: 1;}
.product-navbar.toggle,.tree-header.toggle{
  width: 0;
  overflow: visible;
}
.product-navbar.toggle .accordion-list,.classify-navbar.toggle .tree-header{
  opacity: 0;
  margin: 0;
  transition: opacity .1s;
  overflow: hidden;
}
.product-navbar.toggle .btn-switch span{
  margin-left: -16px;
}

.product-navbar .accordion-list{
  background: none;
    box-shadow: none;
    min-height: 400px;
}
</style>
