<template>
  <div class="nav-wrapper">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
      router
    >
      <div class="logo-container">
        <img src="@/assets/A1.jpg" alt="Logo" class="logo-img" />
      </div>
      <el-menu-item index="/home/Nav1">选项一</el-menu-item>

      <el-menu-item index="/home/Nav2">选项二</el-menu-item>

      <el-menu-item index="/home/Nav3">选项三</el-menu-item>

      <el-menu-item index="/home/Nav4">选项四</el-menu-item>

      <el-sub-menu index="5">
        <template #title>实验室</template>
        <el-menu-item index="2-1">选项二-1</el-menu-item>
        <el-menu-item index="2-2">选项二-2</el-menu-item>
        <el-menu-item index="2-3">选项二-3</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>选项二-4</template>
          <el-menu-item index="2-4-1">选项二-4-1</el-menu-item>
          <el-menu-item index="2-4-2">选项二-4-2</el-menu-item>
          <el-menu-item index="2-4-3">选项二-4-3</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>

    <AvatarMenu />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AvatarMenu from '@/components/AvatarMenu.vue'

const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped>
.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 100;
  display: flex;
  align-items: center;
  background-color: #545c64;
}

.el-menu-demo {
  flex: 1;
  min-width: 0;
  border-bottom: none !important;
}

.logo-container {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 16px;
}

.logo-img {
  height: 100%;
  width: auto;
  object-fit: contain;
}
</style>
