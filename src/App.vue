<template>
  <div id="app">
        <!--- <div id="box"></div>-->
        <!-- <div id="lang"></div>-->

        <input type="text" v-model="txt"> {{txt|replaceNum}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      txt:""
    }
  },
  methods:{
    zhuan(){
      addEventListener("mousemove",(e)=>{
        let x = 473;
        let y = 364;
        let jiao = Math.atan2(e.y-y,e.x-x)*(180/Math.PI);
        document.getElementById("lang").style.transform = "rotate("+(jiao+90)+"deg)";
      })

    }
  },
  mounted(){
    this.zhuan()
  },
  filters:{
    replaceNum:function(val){
      return val.replace(/[\d]/g,"*")
    }
  }
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
#box{
  width: 300px;
  height: 100px;
  border: 1px solid black;
  margin: 0 auto;
  position: relative;
  top: 300px;
}
#lang{
  width: 10px;
  height: 200px;
  border: 1px solid black;
  margin: 0 auto;
  position: relative;
  top: 50px;  
  transform-origin: 50% 100%;


}
</style>
