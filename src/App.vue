<template>
  <div id="app" >
    <orders-list />
  </div>
</template>

<script>
import OrdersList from "./components/OrdersList.vue";

export default {
  name: "App",
  components: {
    OrdersList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f0f4f7;
  height: 99vh;
}
</style>
