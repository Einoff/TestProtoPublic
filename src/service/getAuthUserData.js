import { store } from "../index";

const getAuthUserData = async () => {
    const url = store.getState().fetchUrl.getAuthUserData;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            const state = store.getState();
            state.who = data;

        })

        
}
export default getAuthUserData