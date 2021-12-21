<template>
  <div style="box-shadow: 0 0 2px 1px #ccc; z-index: 999;">
    <div style="float: right; margin-right: 20px;">
      <el-button
        type="text"
        size="medium"
        icon="el-icon-back"
        >撤销</el-button
      >
      <el-button
        type="text"
        size="medium"
        icon="el-icon-right"
        >重做</el-button
      >
      <el-button
        type="text"
        size="medium"
        icon="el-icon-tickets"
        >保存</el-button
      >
      <el-button
        type="text"
        size="medium"
        icon="el-icon-view"
        >预览</el-button
      >
      <el-button
        type="text"
        size="medium"
        icon="el-icon-delete"
        >清空</el-button
      >
    </div>
    <!-- <custom-header>
      <div slot="opertBtn">
        <el-button
          type="text"
          :disabled="!$globalData.operateStack.length"
          size="medium"
          icon="el-icon-back"
          @click="handleUndo"
          >撤销</el-button
        >
        <el-button
          type="text"
          size="medium"
          icon="el-icon-right"
          @click="handleRedo"
          >重做</el-button
        >
        <span class="el-button-opert-text">
          <el-button
            type="text"
            size="medium"
            icon="el-icon-tickets"
            @click="onGenerateSaveJson"
            >保存</el-button
          >
          <el-button
            type="text"
            size="medium"
            icon="el-icon-view"
            @click="onHandlePreview"
            >预览</el-button
          >
          <el-button
            type="text"
            size="medium"
            icon="el-icon-delete"
            @click="onHandleClear"
            >清空</el-button
          >
        </span>
      </div>
    </custom-header> -->
    <!-- 代码编辑弹窗 -->
    <!-- <codeEditDialog
      ref="codePreview"
      :visible="codeEditVisible"
      title="代码编辑"
      width="800px"
      form
      @on-close="codeEditVisible = false"
    >
      <el-tabs
        v-model="codeActiveName"
        type="border-card"
        style="box-shadow: none"
      >
        <el-tab-pane label="CSS" name="css">
          <code-editor v-model="cssTemplate" height="450px" mode="css" />
        </el-tab-pane>
      </el-tabs>

      <template slot="action">
        <template>
          <el-button
            type="primary"
            @click="codeEditVisible = false"
            >保存</el-button
          >
        </template>
      </template>
    </codeEditDialog> -->
    <!-- 图片组件 弹框 -->
    <!-- <img-top-dialog
      ref="imgTopDialogForm"
      :dialog-visible.sync="imgVisible"
      :title="imgTitle"
      :list-data="imgListData"
    /> -->
    <!-- <icon-select-dialog
      :dialog-visible.sync="iconVisible"
      :isChoose="false"
      title="图标"
      :list-data="iconListData"
    /> -->
    <!-- 预览 -->
    <!-- <mobilePreviewDialog
      :dialog-visible.sync="previewDialog"
      :componentList="componentList"
      :subpageList="subpageList"
      :globalConfig="currentGlobalConfig"
    /> -->
  </div>
</template>

<script>
export default {
  name: "DesignerHeader"
}
</script>

<style lang="less" scoped>

</style>
