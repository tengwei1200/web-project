<template>
  <div class="layout-index-box">
    <el-container>
      <el-header>一汽车联网管理系统</el-header>
      <el-container>
        <el-aside>
          <el-menu></el-menu>
        </el-aside>
        <!-- name="slide-fade" -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Menu from './menu'
  export default {
    data() {
      return {

      }
    },

    components: {
      'el-menu': Menu
    }
  }
</script>

<style lang="scss" scoped>
  // .slide-fade {
  //   position: fixed;
  //   left: 0;
  //   right: 0;
  //   width: 100%;
  //   background-color: white;
  // }

  // .slide-fade-enter,
  // .slide-fade-leave-to {
  //   left: 0;
  //   top: 0;
  //   right: 0;
  //   position: absolute;
  //   transform: translateX(-500px) translateY(-500px) rotate(-150deg) scale(0.5);
  //   opacity: 1;
  // }

  // .slide-fade-enter-active {
  //   background-color: white;
  //   transition: all 0.6s ease;
  // }

  // .slide-fade-leave-active {
  //   transition: all 0.7s ease;
  //   background-color: white;
  //   transform: translateX(500px) translateY(500px) rotate(150deg) scale(1);
  //   z-index: 100;
  // }
</style>
