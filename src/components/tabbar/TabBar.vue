<template>
      <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar',
    
}
</script>


<style>
.tab-bar{
  display: flex;
  
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #8b7f7f;
  /* box-shadow: 0 -3px 2px rgba(193, 47, 47, 0.2);不生效 */
  /* z-index: 9; */
}
/* .tab-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
} */
</style>