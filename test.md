###出现的问题
1、插条的外面需要包裹一个模板
例如<template v-slot:item-icon></template>



$route和$router的区别
$route那个最活跃的就是哪一个

$router 
今天做的多
主要问题有子页面向父页面传递
this.$emit('itemclick',index)传递事件
接收：@itemclick="itemclick"

this.goods[type].list.push(...res.data.list)

同一页面多条数据
<!-- create(){
    this.getgoods('pop')
}
methods(){
    const page=this.goods[type].page+1

} -->
分析：
第一步：拿数据 const page =this.goods[type].page+1 this.goods[type].list=(...res.data.list)
第二部：将数据代入模块 ：goodsItem="goods[currentType].list"
第三部：判断使用switch循环 case0 this.currentType='pop'


