<template>
  <div class="tab-control">
    <div v-for=" (item,index) in titles" :key="item" class="tab-control-item"
    :class="{active:index===indexcurrent}"
    @click="tabItemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
    return{
      indexcurrent:0
    }
  },
  methods:{
    tabItemClick(index){
      // console.log(index);
      this.indexcurrent=index;
      this.$emit('itemClick',index)
    }
    
  }

};
</script>

<style scoped>
.tab-control{
    display: flex;
    text-align: center;
}
.tab-control-item{
    flex:1;
    line-height: 40px;
    height: 40px;
}
.active{
  color: rgb(197, 38, 107);
}
.active span{
  border-bottom: 2px solid rgb(197, 38, 107);
  padding: 5px;
}
</style>
