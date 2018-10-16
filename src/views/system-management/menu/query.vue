<template>
  <el-row>
    <el-col :span="24">
      <el-card>
        <el-input v-model="filter" placeholder="输入关键字进行过滤"/>
      </el-card>
    </el-col>
    <el-col :span="24" style="margin: 10px 0px;">
      <button-right>
        菜单树列表
        <template slot="button">
          <el-button-group>
            <el-button v-if="selected" type="primary" @click="$emit('option-changed','check', selected)">查看</el-button>
            <el-button v-if="needSync" type="primary" @click="syncMenus">同步</el-button>
            <el-button v-if="selected" type="primary" @click="$emit('option-changed','edit', selected)">编辑</el-button>
          </el-button-group>
        </template>
      </button-right>
    </el-col>
    <el-col :span="24">
      <el-tree :data="[{}]">
        <div slot-scope="{ data }" class="custom-tree-node">
          <div class="name">名称</div>
          <div class="remark">备注</div>
          <div class="icon">图标</div>
        </div>
      </el-tree>
      <el-tree ref="tree" :data="menusTree" :filter-node-method="filterNodeHandler" class="filter-tree" highlight-current accordion @current-change="(value, node) => selected = value">
        <div slot-scope="{ data }" class="custom-tree-node">
          <div class="name">
            {{ data.name }}
          </div>
          <div class="remark">
            <abbreviation :content="data.remark"/>
          </div>
          <div class="icon">
            <svg-icon :icon-class="data.icon"/>
          </div>
        </div>
      </el-tree>
    </el-col>
  </el-row>
</template>

<script>
import Abbreviation from '@/components/Abbreviation/index'
import SvgIcon from '@/components/SvgIcon/index'
import { asyncMenuMap } from '@/router'
import { queryAllMenus, syncMenus } from '@/api/system-management/menu'

export default {
  components: { Abbreviation, SvgIcon },
  data() {
    return {
      filter: null,
      selected: null,
      menusTree: [],
      allMenus: [],
      needSync: false
    }
  },
  watch: {
    filter(filter) {
      this.$refs.tree.filter(filter)
    }
  },
  activated() {
    this.initMenus()
  },
  methods: {
    initMenus() {
      queryAllMenus({}).then(data => {
        this.allMenus = data
        const menusTree = []
        asyncMenuMap.forEach(router => {
          menusTree.push(this.createMenu(router, null))
        })
        this.menusTree = menusTree
      })
    },
    createMenu(router, parentId) {
      const menu = {}
      let remoteMenu = null
      const remoteMenuIndex = this.allMenus.findIndex(item => { return item.id === router.name })
      if (remoteMenuIndex === -1) { // 需要同步，本次构建从本地路由中构建
        this.needSync = true
        menu.id = router.name
        menu.parentId = parentId
        menu.flag = 1
        menu.state = 0
        menu.index = router.meta.index
        menu.name = router.meta.title
        menu.icon = router.meta.icon
        menu.remark = null
        menu.createdBy = null
        menu.createdDate = null
        menu.modifiedBy = null
        menu.modifiedDate = null
      } else { // 不需要同步，本次构建从远端服务器构建
        remoteMenu = this.allMenus[remoteMenuIndex]
        menu.id = remoteMenu.id
        menu.parentId = parentId
        menu.flag = 1
        menu.state = 0
        menu.index = remoteMenu.index
        menu.name = remoteMenu.name
        menu.icon = remoteMenu.icon
        menu.remark = remoteMenu.remark
        menu.createdBy = remoteMenu.createdBy
        menu.createdDate = remoteMenu.createdDate
        menu.modifiedBy = remoteMenu.modifiedBy
        menu.modifiedDate = remoteMenu.modifiedDate
      }

      menu.children = []
      if (router.children && router.children.length > 0) {
        router.children.forEach(children => {
          menu.children.push(this.createMenu(children, menu.id))
        })
      }
      return menu
    },
    syncMenus() {
      this.$confirm('确定要同步吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        syncMenus(this.menusTree).then(data => {
          this.needSync = false
          this.initMenus()
          this.$message({
            type: 'success',
            message: '保存成功'
          })
        })
      }, () => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    },
    filterNodeHandler(value, data) {
      if (!value) return true
      return data.name.indexOf(value) !== -1
    }
  }
}
</script>

<style lang="scss" scoped>
  /deep/ .el-card {
    border: none;
  }
  .query-btn /deep/ .el-button {
    float: right;
    margin-left: 10px;
  }

  /deep/ .el-tree {
    border-bottom: 1px solid #ebeef5;

    .el-tree-node__content {
      border-top: 1px solid #ebeef5;
      border-left: 1px solid #ebeef5;
      border-right: 1px solid #ebeef5;
      min-height: 40px;
    }
  }

  .custom-tree-node {
    width: 100%;

    .name {
      float: left;
      min-height: 40px;
      line-height: 40px;
    }

    .remark {
      float: right;
      width: 300px;
      min-height: 40px;
      line-height: 40px;
      border-left: 1px solid #ebeef5;
      text-align: center;
    }

    .icon {
      float: right;
      width: 100px;
      min-height: 40px;
      line-height: 40px;
      border-left: 1px solid #ebeef5;
      text-align: center;
    }
  }
</style>