<template>
  <tr>
    <!-- order.map() -->
    <td >{{order.name}}</td>
    <td>{{order.price}} LE</td>
    <td>
      <quantity :id="order.id" :quantity="order.quantity"  />
    </td>
  </tr>
</template>

<script>
import Quantity from "./Quantity.vue";
export default {
  props: ["order"],
  name: "order-item",
  components: {
    Quantity
  },
};
</script>

<style>
/* .table {
  color: #464b50;
} */
</style>