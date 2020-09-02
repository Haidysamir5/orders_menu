//set all needed states
export const FETCH_ORDERS=(state,payload)=>{
    state.orders = payload.order_items;
    state.user = payload.user;
    state.restaurant = payload.restaurant;
}

//set all needed states
export const FETCH_ORDER=(state,payload)=>{
    state.orders = payload.order_items;
    state.user = payload.user;
    state.restaurant = payload.restaurant;
}