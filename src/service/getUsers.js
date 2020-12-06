import { store } from "../index";

const getUsersFromServer = async() => {
    const url = store.getState().fetchUrl.getUsers;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            const state = store.getState();
            state.users = data;
        })

}
export default getUsersFromServer