<template>
    <div class="login-page">
        <div ref="chartRef" class="login-chart"></div>
        <div class="input-group">
            <h2>登录</h2>
            <el-input v-model="username" style="width: 240px" type="text" placeholder="用户名" />
            <el-input v-model="password" style="width: 240px" type="password" placeholder="密码" show-password>
                <template #password-icon="{ visible }">
                    <el-icon :size="16">
                        <Unlock v-if="visible" />
                        <Lock v-else />
                    </el-icon>
                </template>
            </el-input>

            <div class="button-group">
                <el-button type="primary" @click="handleRegister">注册</el-button>
                <el-button type="success" @click="handleLogin">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus'
import { ref } from 'vue'
import { Lock, Unlock } from '@element-plus/icons-vue'
import router from '@/router'
import { useStore } from 'vuex'
import * as echarts from 'echarts'

const store = useStore()
const username = ref('')
const password = ref('')

const chartRef = ref<HTMLElement | null>(null)

const handleLogin = () => {
    console.log(username.value, password.value)

    if (chartRef.value) {
        const chart = echarts.init(chartRef.value)
        chart.setOption({
            graphic: {
                elements: [
                    {
                        type: 'text',
                        left: 'center',
                        top: 'center',
                        style: {
                            text: 'Shion',
                            fontSize: 80,
                            fontWeight: 'bold',
                            lineDash: [0, 200],
                            lineDashOffset: 0,
                            fill: 'transparent',
                            stroke: '#000',
                            lineWidth: 1
                        },
                        keyframeAnimation: {
                            duration: 3000,
                            loop: false,
                            keyframes: [
                                {
                                    percent: 0.7,
                                    style: {
                                        fill: 'transparent',
                                        lineDashOffset: 200,
                                        lineDash: [200, 0]
                                    }
                                },
                                {
                                    percent: 0.8,
                                    style: {
                                        fill: 'transparent'
                                    }
                                },
                                {
                                    percent: 1,
                                    style: {
                                        fill: 'black'
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        })

        setTimeout(() => {
            store.commit('setToken', true)
            store.commit('setUsername', username.value)
            router.push({ name: 'home' })
            ElNotification({
                title: '登录成功',
                message: `欢迎 ${username.value} `,
                type: 'success',
            })
        }, 3000)
    }
}

const handleRegister = () => {
    console.log(username.value, password.value)
}
</script>

<style scoped>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    padding-top: 2em;
}
.login-chart {
    width: 600px;
    height: 200px;
}
.input-group {
    border: 1px solid #ccc;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}
</style>
