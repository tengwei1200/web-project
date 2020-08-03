<template>
  <div>
    <div id="carMap"></div>
    <div id="panel"></div>
    <el-button class="navBtn" type="primary" @click="navigation">开启步行导航</el-button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      options: {
        showButton: true, //是否显示定位按钮
        buttonPosition: "LB", //定位按钮的位置
        /* LT LB RT RB */
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮距离对应角落的距离
        showMarker: true, //是否显示定位点
        markerOptions: {
          //自定义定位点样式，同Marker的Options
          offset: new AMap.Pixel(-18, -36),
          content:
            '<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>'
        },
        showCircle: true, //是否显示定位精度圈
        circleOptions: {
          //定位精度圈的样式
          strokeColor: "#0093FF",
          noSelect: true,
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: "#02B0FF",
          fillOpacity: 0.25
        }
      },
      map: null
    };
  },
  methods: {
    navigation() {
      // 步行导航
      const walking = new AMap.Walking({
        map: this.map,
        panel: "panel"
      });
      //根据起终点坐标规划步行路线
      walking.search(
        [
          { keyword: "长港路(地铁站)", city: "武汉" },
          { keyword: "汉口火车站(地铁站)", city: "武汉" }
        ],
        function(status, result) {
          // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
          if (status === "complete") {
            log.success("绘制步行路线完成");
          } else {
            log.error("步行路线数据查询失败" + result);
          }
        }
      );
    },
    mapInit() {
      const that = this;
      AMap.plugin(["AMap.Geolocation"], function() {
        const geolocation = new AMap.Geolocation(that.options);
        that.map.addControl(geolocation);
        geolocation.getCurrentPosition();
      });
    }
  },
  mounted() {
    // 初始化地图时，若center属性缺省，地图默认定位到用户所在城市的中心
    this.map = new AMap.Map("carMap", {
      resizeEnable: true,
      zoom: 11
    });
    this.mapInit();
  }
};
</script>

<style lang="scss" scoped>
#carMap {
  width: 100%;
  height: 100%;
}
#panel {
  position: fixed;
  background-color: white;
  max-height: 41%;
  overflow-y: auto;
  top: 140px;
  left: 810px;
  width: 260px;
  z-index: 1;
}
#panel .amap-call {
  background-color: #009cf9;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
#panel .amap-lib-walking {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}
.navBtn {
  position: fixed;
  top: 550px;
}
</style>