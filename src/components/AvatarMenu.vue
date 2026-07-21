<template>
  <div class="avatar-menu">
    <el-dropdown trigger="hover" @command="handleCommand">
      <span class="avatar-trigger">
        <el-avatar :size="40" :src="avatarSrc" />
        <span class="username">{{ store.getters.getUsername || '未登录' }}</span>
        <el-icon class="arrow-icon"><ArrowDown /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="my">
            <el-icon><User /></el-icon>
            <span>我的</span>
          </el-dropdown-item>
          <el-dropdown-item command="settings">
            <el-icon><Setting /></el-icon>
            <span>设置</span>
          </el-dropdown-item>
          <el-dropdown-item divided command="logout">
            <el-icon><SwitchButton /></el-icon>
            <span>退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessageBox } from 'element-plus'
import { ArrowDown, User, Setting, SwitchButton } from '@element-plus/icons-vue'

const store = useStore()
const router = useRouter()

const avatarSrc = computed(() => {
  const username = store.getters.getUsername
  return username
    ? `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(username)}`
    : ''
})

const handleCommand = (command: string) => {
  switch (command) {
    case 'my':
      ElMessageBox.alert('我的页面开发中...', '提示')
      break
    case 'settings':
      ElMessageBox.alert('设置页面开发中...', '提示')
      break
    case 'logout':
      ElMessageBox.confirm('确定要退出登录吗？', '退出登录', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        store.commit('setToken', false)
        store.commit('setUsername', '')
        router.push({ name: 'login' })
      }).catch(() => {})
      break
  }
}
</script>

<style scoped>
.avatar-menu {
  display: flex;
  align-items: center;
  padding-right: 16px;
  flex-shrink: 0;
}

.avatar-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #fff;
  user-select: none;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.avatar-trigger:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.username {
  font-size: 14px;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.arrow-icon {
  font-size: 12px;
  transition: transform 0.2s;
}

.avatar-trigger:hover .arrow-icon {
  transform: rotate(180deg);
}

.el-dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
