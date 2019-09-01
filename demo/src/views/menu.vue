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

