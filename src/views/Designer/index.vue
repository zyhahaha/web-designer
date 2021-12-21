<template>
  <el-container style="height: 100%;">
    <DesignHeader />
    <!-- <DesignHeader
      :id="id"
      :projectType="projectType"
      :globalConfig="globalConfig"
      :mainComponentList="mainComponentList"
      :componentList="componentList"
      :subpageList="subpageList"
      :chooseSubpageIndex="chooseSubpageIndex"
      :collectionPermissionListPool="collectionPermissionListPool"
    /> -->
    <el-container style="height: calc(100% - 50px);">
      <!-- 左侧新版菜单栏 -->
      <AsideMenu />
      <!-- <AsideMenu
        :componentsConfigs="componentsConfigs"
        :componentList="componentList"
        :globalConfig="globalConfig"
        :deviceDesignType="projectType"
        :pageModuleList="pageModuleList"
      /> -->
      <!-- 主体内容 -->
      <el-container class="main-center-container" direction="vertical" v-if="reportDataIsAlready">
        <!-- <SubpageManage
          :globalConfig="globalConfig"
          :mainComponentList="mainComponentList"
          :componentList="componentList"
          :subpageList="subpageList"
          @onInitPageData="initPageData"
          @onSaveMainComponentList="componentList => {this.mainComponentList = componentList}"
          @onChangeMainPage="onChangeMainPage"
          @onChangeSubpage="
            (globalConfig, componentList, subpageIndex) => {
              this.currentGlobalConfig = globalConfig;
              this.componentList = componentList;
              this.chooseSubpageIndex = subpageIndex;
            }
          "
        /> -->
        <!-- <MobileWidgetContainer
          @mobileViewClick="onGoPageConfig"
          @onChangeComponentList="onChangeComponentList"
          @onChangeChooseItemIndex="onChangeChooseItemIndex"
          :componentList="componentList"
          :globalConfig="currentGlobalConfig"
        /> -->
      </el-container>
      <el-container class="main-center-container" direction="vertical" v-else></el-container>
      <!-- 右侧组件配置栏 -->
      <ConfigPanel />
      <!-- <ComponentConfigPanel
        ref="componentConfigPanel"
        :projectType="projectType"
        :globalConfig="globalConfig"
        :mainComponentList="mainComponentList"
        :componentList="componentList"
        :subpageList="subpageList"
        :chooseSubpageIndex="chooseSubpageIndex"
        :currentDeepParentNodeList="currentDeepParentNodeList"
        :collectionPermissionListPool="collectionPermissionListPool"
        :currentWidgetComponentConfig="currentWidgetComponentConfig"
        :currentGlobalConfig="currentGlobalConfig"
        @onDelSubpage="onDelSubpage"
      /> -->
    </el-container>
    <el-footer height="0"></el-footer>
  </el-container>
</template>

<script>
  import DesignHeader from './layout/header/index.vue'
  import AsideMenu from './layout/aside-menu/index.vue'
  import ConfigPanel from './layout/config-panel/index.vue'
  export default {
    name: 'Designer',
    components: {
      DesignHeader,
      AsideMenu,
      ConfigPanel
    }
  }
</script>

<style lang="less" scoped>
.main-center-container {
  padding: 20px;
  background-color: #EFF2F5;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
}
</style>
