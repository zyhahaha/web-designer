<template>
  <div class="aside-menu">
    <el-tabs v-model="tabsActive" stretch>
      <el-tab-pane label="基础组件" name="basics">
        <el-collapse v-model="collapseActives" @change="onHandleChange">
          <el-collapse-item
            v-for="(aside, key) in asideList"
            :key="key"
            :title="aside.name"
            :name="key"
          >
            <template v-slot:title>
              <span class="aside-collapse-title">{{ aside.name }}</span>
            </template>

            <ul class="menu-item-wrap">
              <li>
                <div>
                  <i class="iconfont" />
                </div>
                <div class="icon-text">
                  <span>test</span>
                </div>
              </li>
            </ul>
            <!-- <draggable
              tag="ul"
              class="menu-item-wrap"
              :list="asideMenuComponentConfigList[key]"
              v-bind="{
                group: { name: draggableGroupName, pull: 'clone', put: false },
                sort: false,
                ghostClass: 'ghost',
              }"
              @end="onDragMoveEnd"
              @start="
                onDragMoveStart($event, asideMenuComponentConfigList[key])
              "
            >
              <li
                v-for="(
                  componentConfig, configKey
                ) in asideMenuComponentConfigList[key]"
                :key="configKey"
                @click="handleField(item)"
              >
                <div>
                  <i class="iconfont" :class="componentConfig.icon" />
                </div>
                <div class="icon-text">
                  <span>{{ componentConfig.name }}</span>
                </div>
              </li>
            </draggable> -->
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="复合组件" name="modules">
        <div class="groupComment">
          <el-collapse v-model="collapseGroupActives" @change="onHandleChange">
            <!-- <draggable
              tag="ul"
              class="module-item-wrap"
              :list="pageModuleList"
              v-bind="{
                group: { name: 'people', pull: 'clone', put: false },
                sort: false,
                ghostClass: 'ghost',
              }"
            >
              <li
                v-for="(pageModuleItem, key) in pageModuleList"
                :key="key"
                @click="handleField(item)"
              >
                <div class="icon-text">
                  <span>{{ pageModuleItem.reportName }}</span>
                </div>
              </li>
            </draggable> -->
          </el-collapse>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'AsideMenu',
  data(){
    return {
      tabsActive: "basics",
      collapseActives: [0, 1, 2, 3],
      collapseGroupActives: [],
      asideList: [
        { name: "布局", icon: "iconRectangleCopy" },
        { name: "图表", icon: "iconqita" },
        { name: "展示", icon: "iconqita" },
        { name: "表单", icon: "iconqita" },
      ],
    }
  },
  methods: {
    onHandleChange () {
      console.log('aaaa')
    }
  }
}
</script>

<style lang="less" scoped>
.aside-menu {
  overflow: auto;
  width: 240px;
  &::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 0;
    background: #fff;
  }
  /deep/.el-tabs__header {
    margin: 0;
    position: fixed;
    top: 50px;
    z-index: 20;
    width: 240px;
    background: #fff;
  }
  /deep/.el-tabs__nav {
    height: 45px;
  }
  /deep/.el-tabs__content {
    margin-top: 38px;
  }
  .aside-collapse-title {
    padding-left: 20px;
    font-size: 14px;
    font-weight: bold;
  }
  .menu-item-wrap {
    padding: 0 10px;
    li {
      box-sizing: border-box;
      display: inline-block;
      width: 50%;
      margin: 10px 0;
      text-align: center;
      color: #666;
      cursor: pointer;
      border: 1px solid transparent;
      &:hover {
        color: #409eff;
        border: 1px dashed #409eff;
      }
      .iconfont {
        font-size: 45px;
      }
      .icon-text {
        margin-top: -12px;
      }
    }
  }
  .groupComment {
    /deep/.el-collapse {
      padding: 0 10px;
    }
  }
  .module-item-wrap {
    padding: 0 10px;
    li {
      margin: 10px 0px;
      padding: 20px 0px;
      text-align: center;
      color: #666;
      cursor: pointer;
      border: 1px solid transparent;
      &:hover {
        color: #409eff;
        border: 1px dashed #409eff;
      }
    }
  }
}
</style>
