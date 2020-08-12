import { store } from "../index";

const getOrdersFromServer = async () => {
    const url = `http://localhost:8080/api/backend/getorders.php`;
   await fetch(url)
        .then(response => response.json())
        .then(data => {
            const state = store.getState();
            state.orders = data;
        })

}

export default getOrdersFromServer