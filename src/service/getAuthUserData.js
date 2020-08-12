import { store } from "../index";

const getAuthUserData = async () => {
    const url = `http://localhost:8080/api/backend/getAuthUserData.php`;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            const state = store.getState();
            state.who = data;

        })

        
}
export default getAuthUserData