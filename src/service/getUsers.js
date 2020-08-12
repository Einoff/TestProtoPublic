import { store } from "../index";

const getUsersFromServer = async() => {
    const url = `http://localhost:8080/api/backend/getUsers.php`;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            const state = store.getState();
            state.users = data;
        })

}
export default getUsersFromServer