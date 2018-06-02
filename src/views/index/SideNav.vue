<template>
  <div class="product-navbar classify-navbar">
    <div class="tree-header">内容管理</div>
    <div class="btn-switch"><span class="fa fa-angle-double-right"></span> <span class="fa fa-angle-left"></span></div>
    <div class="accordion-list">

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
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
