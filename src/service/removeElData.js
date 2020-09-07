import fetchPost from "./fetchPost";
import { store } from "..";

const removeElData = (id, targetTable) => {
    const url = store.getState().fetchUrl.removeElUrl;
    let data = new FormData();
    data.append('id', id);
    data.append('targetTable', targetTable);
    fetchPost(url, data);
    return data
}

export default removeElData