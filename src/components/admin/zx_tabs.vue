<script setup lang="ts">
import{IconClose} from "@arco-design/web-vue/es/icon";
import {useRoute} from "vue-router";
import router from "@/router";
import {ref, watch} from "vue";
import {Swiper,SwiperSlide} from "swiper/vue";
import {onMounted} from "vue";
import {querySelector} from "@arco-design/web-vue/es/_utils/dom";

const route = useRoute();
interface TabType  {
  name: string
  title: string
}

const tabs= ref <TabType[]> ([
  {title:"首页",name:"home"},
])

function check(item: TabType){
  router.push({
    name:item.name,
  })

  saveTabs()
}

function saveTabs(){
  localStorage.setItem("zx_tabs", JSON.stringify(tabs.value))
}

function removeItem(item: TabType){
  const index=tabs.value.findIndex((value)=>item.name===value.name)
  if(index!==-1){
    // 判断删除元素是不是当前所在的
    if(item.name===route.name){
      router.push({name:tabs.value[index-1].name,})
    }
    tabs.value.splice(index,1)
  }
  saveTabs()
}

function removeAllItem(){
  tabs.value=[{title:"首页",name:"home"}]
  router.push({name:"home",})
  saveTabs()
}

function loadTabs() {
  const zx_tabs = localStorage.getItem("zx_tabs")
  if (zx_tabs !== null) {
    try {
      tabs.value = JSON.parse(zx_tabs)
    } catch (error) {
      console.log(error)
    }
  }
}
loadTabs();

watch(()=>route.name,()=>{
  //判断路由名称,在不在tabs,不在加入
  const index=tabs.value.findIndex((value)=>route.name===value.name)
  if(index===-1){
    tabs.value.push({
      name:route.name as string,
      title:route.meta.title,
    })
  }
},{immediate:true})

 const slideCount = ref(100)
onMounted(() => {
  //显示的总宽度
  const swiperDom=document.querySelector(".zx_tabs_swiper")as HTMLDivElement
  const swiperWidth=swiperDom.clientWidth
  //实际的总宽度
  const wrapperDom=document.querySelector(".zx_tabs_swiper .swiper-wrapper")as HTMLDivElement
  const wrapperWidth=wrapperDom.scrollWidth

  if(swiperWidth>wrapperWidth){
    return
  }

  //如果实际总宽度大于了显示的总宽度
//   遍历swiper-slide,然后从前往后加
   const slideList=document.querySelectorAll(".zx_tabs_swiper .swiper-slide")
   let allWith =0
   let index=0
   for(const slide of slideList){
     allWith+=(slide.clientWidth + 20)
     index++
     if(allWith>=swiperWidth){
       break
     }
   }
   slideCount.value=index
   //选中高亮
  const activeSlide=document.querySelector(".zx_tabs_swiper .swiper-slide.active") as HTMLDivElement
  if(activeSlide.offsetLeft>swiperWidth){
    const offsetLeft=swiperWidth - activeSlide.offsetLeft
    setTimeout(()=>{
      wrapperDom.style.transform = `translate3d(${offsetLeft}px, 0px, 0px)`;
    },1000)
  }
})


</script>

<template>
<div class="zx_tabs">
  <swiper class="zx_tabs_swiper" :slides-per-view="slideCount">
    <swiper-slide v-for="item in tabs" :class="{active: route.name===item.name || route.name === 'admin'}">
      <div class="item" @click="check(item)" :class="{active: route.name===item.name||route.name === 'admin'}">
        {{ item.title }}
        <span class="close" title="删除" @click.stop="removeItem(item)" v-if="item.name!=='home'">
      <IconClose></IconClose>
    </span>
      </div>
    </swiper-slide>
  </swiper>
  <div class="item" @click="removeAllItem">
    删除全部
  </div>
</div>
</template>

<style lang="less">
.zx_tabs{
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  .swiper{
    width: calc(100% - 100px);
    display: flex;
    overflow: hidden;

    .swiper-wrapper{
      display: flex;
      align-items: center;
      .swiper-slide{
        width:fit-content !important;
        flex-shrink: 0;
      }
    }
  }
  .item{
    padding: 4px 6px;
    background-color: var(--color-bg-1);
    border: @zx_border;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
    flex-shrink: 1;
    &:hover{
      background-color: var(--color-fill-1);
    }
    &.active{
      background-color: @primary-6;
      color: white;
    }
  }
}
</style>
