<template>
<div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
</div>
</template>

<script>
// import { Router } from 'express'

export default {
  name: 'TabBarItem',
  props:{
      path:String
  },
  data(){
    return{
      // isActive:true,
      // to:/home,
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    }

  },
  methods:{
    itemClick(){
      console.log(this.itemClick)
      this.$router.push(this.path)
      // console.log(1);
      // this.$router.replace.catch(this.path)
      // this.$router.replace.catch(err=&gt;err)(this.path)
      // this.$router.replace(this.path).catch(()=&gt;{})
    }
  }

}
</script>

<style>
.tab-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
}
.tab-bar-item img{
    height: 24px;
    width: 24px;
}
.active{
  color:rgb(203, 106, 106);
}

</style>
