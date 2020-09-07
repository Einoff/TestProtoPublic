import { store } from "../index";

const getListsItemData = async () => {
    const url = store.getState().fetchUrl.getListItems;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            const state = store.getState();
            state.listsSetings = data;
        })
}

export default getListsItemData