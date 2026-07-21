<template>
  <div class="home-container">
    <el-container>
      <el-header>
        <Navigation />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
import Nav1 from '@/components/nav/Nav1.vue'
import Nav2 from '@/components/nav/Nav2.vue'
import Nav3 from '@/components/nav/Nav3.vue'
import Nav4 from '@/components/nav/Nav4.vue'
import HomeMain from '@/components/HomeMain.vue'
</script>

<style scoped>
.home-container {
  min-height: 100vh;
}

:deep(.el-main) {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

:deep(.el-container) {
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
