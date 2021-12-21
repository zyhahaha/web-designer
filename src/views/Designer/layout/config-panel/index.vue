<template>
  <el-aside style="width: 315px;">
    <!-- 操作页面组件的快捷功能 -->
    <!-- <QuickGetWidget
      v-if="componentList.length > 0"
      :componentList="componentList"
      :currentWidgetComponentConfig="currentWidgetComponentConfig"
      :currentDeepParentNodeList="currentDeepParentNodeList"
    /> -->
    <!-- 组件配置面板 -->
    <el-tabs
      v-model="configTabsActive"
      stretch
    >
      <el-tab-pane label="基础" name="widget">
        <!-- 页面配置 页面uuid为1, -->
        <!-- <widgetPageConfig
          :globalConfig="globalConfig"
          :isSubpage="!!chooseSubpageIndex"
          :chooseSubpageIndex="chooseSubpageIndex"
          :subpageList="subpageList"
          @onDelSubpage="onDelSubpage"
          v-if="currentWidgetComponentConfig.uuid === 1"
        /> -->
        <!-- 组件配置 -->
        <!-- <widget-config
          :componentConfig="currentWidgetComponentConfig"
          :componentList="componentList"
          :subpageList="subpageList"
          :deviceDesignType="projectType"
          :collectionPermissionListPool="collectionPermissionListPool"
          v-else
        /> -->
      </el-tab-pane>
      <el-tab-pane label="数据" name="data">
        <!-- <widgetDataConfig
          v-if="
            currentWidgetComponentConfig.uuid &&
            currentWidgetComponentConfig.options
          "
          :deviceDesignType="projectType"
          :componentList="componentList"
          :componentConfig="currentWidgetComponentConfig"
        /> -->
      </el-tab-pane>
      <el-tab-pane label="事件" name="event">
        <!-- <widgetEventConfig
          v-if="
            currentWidgetComponentConfig.uuid &&
            currentWidgetComponentConfig.options &&
            currentWidgetComponentConfig.options.eventConfig
          "
          :componentList="componentList"
          :componentConfig="currentWidgetComponentConfig"
          :subpageList="subpageList"
          :deviceDesignType="projectType"
        /> -->
      </el-tab-pane>
    </el-tabs>
  </el-aside>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'ConfigPanel',
  setup(props, ctx) {
    const configTabsActive = ref('widget');
    return {
      configTabsActive
    }
  }
})
</script>

<style>

</style>
