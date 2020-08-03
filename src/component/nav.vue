<template>
  <div id="app">
    <div id="bottom_nav" >
      <div class="nav_item" @click="changeState('msg')">
        <div>
          <img src="../static/icons/msg.png" alt class="icon msg" />
          <div>
            <span>消息</span>
          </div>
        </div>
      </div>
      <div class="nav_item" @click="changeState('cloudproject')" >
        <div>
          <img src="../static/icons/cloudproject.png" alt class="icon cloudproject" />
          <div>
            <span>文档</span>
          </div>
        </div>
      </div>
      <div class="nav_item" @click="changeState('workbench')" >
        <div>
          <img src="../static/icons/workbench.png" alt class="icon workbench"  />
          <div>
            <span>工作台</span>
          </div>
        </div>
      </div>
      <div class="nav_item" @click="changeState('talkbook')" >
        <div>
          <img src="../static/icons/talkbook.png" alt class="icon talkbook" />
          <div>
            <span>通讯录</span>
          </div>
        </div>
      </div>
      <div class="nav_item" @click="changeState('found')" >
        <div>
          <img src="../static/icons/found.png" alt class="icon found"/>
          <div>
            <span>发现</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      preName:""//记录你之前点击的图标
    }
  },
  methods: {
    changeState(ele){
        if(this.preName){
          document.getElementsByClassName(this.preName)[0].src =  "../static/icons/"+this.preName+".png";
          document.getElementsByClassName(this.preName)[0].parentElement.style.color="grey"
        }
        document.getElementsByClassName(ele)[0].src = "../static/icons/blue_"+ele+".png";
        document.getElementsByClassName(ele)[0].parentElement.style.color="#1296db"
        this.preName = ele;
    }

  }
};
</script>
<style scoped>
#bottom_nav {
  width: 400px;
  height: 60px;
  border: 1px solid grey;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

}
.nav_item {
  width: 19%;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  margin-top: 5px;
  

}
.icon {
  width: 40%;

}
span {
  font-size: 5px;
}
</style>