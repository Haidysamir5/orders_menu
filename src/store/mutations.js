export const FETCH_ORDERS=(state,payload)=>{
    state.orders = payload.order_items;
    state.user = payload.user;
    state.restaurant = payload.restaurant;
}