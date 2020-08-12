import { store } from "../index";

const getProdItems = async() => {
    const url = `http://localhost:8080/api/backend/getProdItems.php`;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            const state = store.getState();
            state.prodItems = data;
        })
        .then(()=> {console.log('getProdItems');});
}

export default getProdItems