<template>
    <div class="layout-index-box">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside>
                    <el-menu></el-menu>
                </el-aside>
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive">
                        <el-main>11111111</el-main>
                    </router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive">
                    <el-main>Main</el-main>
                </router-view>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Menu from './menu'
export default {
    data () {
        return {
            
        }
    },

    components: { 'el-menu': Menu }
}
</script>