<template>
  <div class="container">
    <OrderInfo :user="user" :restaurant="restaurant" />
    <div class="table-portlet">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <order-item v-for="order in orders" :key="order.id" :order="order" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import OrderItem from "./OrderItem.vue";
import OrderInfo from "./OrderInfo.vue";

export default {
  name: "orders-list",
  components: { OrderItem, OrderInfo },
  computed: {
    ...mapState([
      // map this.orders to store.state.orders
      "orders",
      "user",
      "restaurant",
    ]),
  },
  mounted() {
    this.$store.dispatch("fetchOrders"); //dispatch fetchorders to call get api
  },
};
</script>

<style>
.table-portlet {
  background: white;
  margin-top: 41px;
  box-shadow: 1px 1px 3px 2px #c3b5b5;
}
.table-portlet tr {
  border-color: #72c1e1;
}
</style>