import { store } from "../index";

const getOrdersFromServer = async () => {
    const url = store.getState().fetchUrl.getOrders;
   await fetch(url)
        .then(response => response.json())
        .then(data => {
            const state = store.getState();
            state.orders = data;
        })

}

export default getOrdersFromServer