<template>
  <div class="panel">
  	<div class="panel-heading">
                文章管理<a class="margin-l10" @click="dialogVisible = true"><span class="el-icon-setting"></span></a>
      <div class="float-right panel-heading-right">
        <el-button
          size="small"
          type="success"
          icon="plus"
          @click="addAr(2)"
           >
                          添加文章
        </el-button>
        <el-button size="small" type="success" icon="plus" @click="catalogVisible = true">创建子部门</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
//      附件
        dialogImageUrl: '',
        imgVisible: false,
//      子栏目
        catalogVisible: false,
        form3: {
          subCatalog: ''
        },

        dialogVisible: false,
        dialogFormVisible: false,
        form: {
          name: ''
        },
        inputVisible: false,
        inputValue: '',
        form1: {
          name: '',
          detail: '',
          delivery: false,
          desc: '',
          dynamicTags: ['标签一'],
        },
        formLabelWidth: '120px',
//      编辑器配置
        content: '你好',
        editorOption: {
         // something config
        },
//      表格
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          arTitle: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          arTitle: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          arTitle: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          arTitle: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          arTitle: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          arTitle: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          arTitle: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
//      产品表单
        productVisible: false,
        productFrom: {
          name: '',
          als: '',
          spec: '',
          feature: '',
          content: ''
        }
      }
    },
    methods: {
      addAr (i) {
        if (i === 1) {
          this.dialogFormVisible = true
        } else {
          this.productVisible = true
        }
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      },
//    文章附件
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
//    编辑器
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        // console.log('editor change!', editor, html, text)
        this.content = html
      },
//    表格
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          });
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      deleteRow(index, rows) {
        rows.splice(index, 1)
      },
//    添加关键字
      handleClose(tag) {
        this.form1.dynamicTags.splice(this.form1.dynamicTags.indexOf(tag), 1)
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },

      handleInputConfirm () {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.form1.dynamicTags.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      },
//    添加封面
      handleRemove(file, fileList) {
        console.log(file, fileList);
      }
    },
    computed: {
      editor() {
//      return this.$refs.myTextEditor.quillEditor
      }
    },
    mounted() {
      console.log('this is my editor', this.editor)
    }
  }
</script>
<style>
  .panel-heading {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin: 0 20px;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    position: relative;
    & a:not(button){
      color: #cbd3dd;
    }
  }
  .panel-body {
    padding: 20px;
    min-height: 250px;
    height: -moz-calc(100vh - 120px);
    height: -webkit-calc(100vh - 120px);
    height: calc(100vh - 120px);
    overflow: auto;
    width: 100%;
}
.panel-body .is-hidden{
  display: table-cell !important;
}
</style>
