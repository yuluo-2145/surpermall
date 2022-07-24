<template>
  <div class="nav-bar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>   
  </div>
</template>

<script>
export default {
  name: 'NavBar',

}
</script>

<style scoped>
.nav-bar{
    line-height: 44px;
    height: 44px;
    display: flex;
    text-align: center;
    /* box-shadow: 0 4px 5px 5px rgba(199, green, rgb(202, 29, 196), 0.4); */
}
.left,.right{
    width: 60px;
    /* background: red; */
}
.center{
    /* background: green; */
    flex: 1;
}

</style>
