<template>
  <div class="title bg-blue pt-2 pb-2">
      <h5 class="my-auto ">{{restaurant.title}} , by {{user.name}}</h5>

  </div>
</template>

<script>
export default {
name:"order-info",
props:["user","restaurant"]
}
</script>

<style>
.title{
    height: 50px ;
    text-align: left;
    border-bottom:1px solid gray ;
}
</style>