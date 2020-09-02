import axios from "axios";

const CrosAnywhere=`https://cors-anywhere.herokuapp.com`
const url = "http://foodie.aqarmap.net/api/orders/115";
const userId = "user_id=2";

// const FETCH_ORDERS='FETCH_ORDERS';

export const fetchOrders = ({ commit }) => {
  axios.get(`${CrosAnywhere}/${url}`).then((response) => {
    commit("FETCH_ORDERS", response.data);
  });
};

export const quantityInc = ({ dispatch  },orderID) => {
  axios.post(`${CrosAnywhere}/${url}/items/${orderID}?${userId}`).then(response => {
    dispatch("fetchOrders");
  });

};
export const quantityDec = ({ dispatch  },orderID) => {
  axios.delete(`${CrosAnywhere}/${url}/items/${orderID}?${userId}`).then(response => {
    dispatch("fetchOrders");
  });

};

