<template>
  <div>
    <div class="top-text">我们相爱已经{{days}}天啦~</div>
    <div class="container">
      <div class="mobie heart heart-beat">
        <div class="heart heart-shadow"></div>
      </div>
    </div>
    <div class="bottom-text">
      <div class="name">
        <i class="iconfont icon-boy"></i>
        {{boy}}
      </div>
      <i class="iconfont icon-love"></i>
      <div class="name">
        <i class="iconfont icon-girl"></i>
        {{girl}}
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "@/fonts/iconfont.css";
import "@/css/heart.css";
import "@/js/utils/snow";
import { getProfileConfig } from "@/js/service/profile";

export default {
  name: "Home",
  metaInfo() {
    return {
      title: this.title
    };
  },
  data() {
    return {
      boy: "冯世昌",
      girl: "胡青青",
      time: "2020-02-14 20:00:00"
    };
  },
  computed: {
    days: function() {
      return moment(new Date()).diff(moment(new Date(this.time)), "days");
    },
    title: function() {
      return "相爱的第" + this.days + "天";
    }
  },
  mounted() {
    getProfileConfig().then(data => {
      this.boy = data.profile.boy;
      this.girl = data.profile.girl;
      this.time = data.profile.time;
      console.log(this.boy, " Love ", this.girl);
      console.log(
        "页面访问量为",
        data.pv,
        "次，有",
        data.uv,
        "人见证了我们的爱情"
      );
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
