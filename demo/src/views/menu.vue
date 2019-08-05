<template>
    <div>
        <el-row class="tac">
            <el-col :span="12">
                 <el-menu :default-active="$route.path"  router unique-opened class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" text-color="#000" active-text-color="#ffd04b">
                    <template v-for="(item,index) in $router.options.routes">
                      <el-submenu  :index="index+''" v-show="item.name" :key="index">
                        <template slot="title">
                          <i :class="item.iconCls" class="el-icon-location"></i>{{item.name}}
                        </template>
                        <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">
                             {{child.name}}
                        </el-menu-item>
                      </el-submenu>
                    </template>
                  </el-menu>
                <!-- <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    text-color="#000"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>车辆管理</span>
                        </template>
                        <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">车辆总表</el-menu-item>
                        <el-menu-item index="1-2">实名认证</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">过户车辆</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                        <template slot="title">产线车辆</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">测试车</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">媒体车</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">展车</span>
                    </el-menu-item>
                </el-menu> -->
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },

    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>

