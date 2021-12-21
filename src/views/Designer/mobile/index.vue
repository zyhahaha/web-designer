<template>
  <div class="mobile-phone-view" @click="$emit('mobileViewClick')">
    <!-- <WidgetContainer
      :style="{
        padding: `${globalConfig.topPaddingDistance || 0}px ${globalConfig.rightPaddingDistance || 0}px ${globalConfig.bottomPaddingDistance || 0}px ${globalConfig.leftPaddingDistance || 0}px`
      }"
      :componentList="componentList"
      :globalConfig="globalConfig"
      @onChangeComponentList="onChangeComponentList"
      @onChangeChooseItemIndex="onChangeChooseItemIndex"
    /> -->
  </div>
</template>

<script>
export default {
  name: 'DesignerMobile'
}
</script>

<style lang="less" scoped>
.mobile-phone-view {
  overflow: auto;
  position: relative;
  margin: 0 auto;
  width: 397px;
  height: 667px;
  // width: 500px;
  // height: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow:0 0 2px 1px #ccc;
  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>
