import axios from "axios";

const CrosAnywhere=`https://cors-anywhere.herokuapp.com` ; //link for solving CORS Policy problem 
const url = "http://foodie.aqarmap.net/api/orders/115";
const userId = "user_id=2";

// const FETCH_ORDERS='FETCH_ORDERS';

//get orders and then commit FETCH_ORDERS mutations
export const fetchOrders = ({ commit }) => {
  axios.get(`${CrosAnywhere}/${url}`).then((response) => {
    commit("FETCH_ORDERS", response.data);
  });
};

//post url to increment the quantity and then dispatch fetchOrders to reload store and components
export const quantityInc = ({ dispatch  },orderID) => {
  axios.post(`${CrosAnywhere}/${url}/items/${orderID}?${userId}`).then(response => {
    dispatch("fetchOrders");
  });
};

//delete url to increment the quantity and then dispatch fetchOrders to reload store and components

export const quantityDec = ({ dispatch  },orderID) => {
  axios.delete(`${CrosAnywhere}/${url}/items/${orderID}?${userId}`).then(response => {
    dispatch("fetchOrders");
  });

};

