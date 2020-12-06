// import fetchPost from "./fetchPost";
import { store } from "../index";
import updateState from "./updateState";
import reRenderEl from "./reRenderEl";
import DefaultListsItems from "../components/admin-panel/main-content/settings/defaultLists/defaultListsItems";

const addDataToServer = (formName, updateStateTarget, url) => {
    const form = document.querySelector(formName);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // const url = store.getState().fetchUrl.addListItem;
            const data = new FormData(e.currentTarget);

            fetchPost(url, data);
            form.reset();

            updateState(updateStateTarget);
            const targetId = e.currentTarget.dataset.id;
            const table = store.getState().listsSetings[targetId];
            const updateList = new DefaultListsItems(targetId, table);
    })

}

export default addDataToServer;