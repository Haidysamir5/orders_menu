<template>
  <div class="row mx-auto">
    <div class="col-3"></div>
    <div class="col-2 pr-0">
      <div class="action-btn action-btn_left" data-order_id="id" @click="quantityDec(id)">
        <span>-</span>
      </div>
    </div>
    <div class="col-2 pr-1 pl-1">
      <div class="cell-text">{{quantity}}</div>
    </div>
    <div class="col-2 pl-0">
      <div class="action-btn action-btn_right" data-order_id="id" @click="quantityInc(id)">
        <span>+</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ["id", "quantity"],
  name: "quantity",
  methods: {
      ...mapActions([
          'quantityInc',
          'quantityDec'
      ])
  },
};
</script>

<style>
.action-btn {
  background: #6dcddc;
  font-size: 20px;
  text-align: center;
  background-clip: content-box;
  color: #fff;
  cursor: pointer;
}

.action-btn:hover {
  background: #72c1e1;
}

.action-btn:active {
  background-color: #58bccc;
  box-shadow: 0 3px #a99c9c57;
  transform: translateY(4px);
}

.action-btn_left {
  border-bottom-left-radius: 44%;
  border-top-left-radius: 42%;
}
.action-btn_right {
  border-bottom-right-radius: 44%;
  border-top-right-radius: 42%;
}

.cell-text {
  border: 1px solid #dee2e4;
  height: 30px;
  padding: 3px 0;
}
</style>