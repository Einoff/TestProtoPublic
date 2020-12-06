import fetchPost from "./fetchPost";
import { store } from "..";

const removeElData = async (id, targetTable, idname, delFolder = false) => {
    const url = store.getState().fetchUrl.removeElUrl;
    let data = new FormData();
    data.append('id', id);
    data.append('targetTable', targetTable);

    if(idname){
        data.append('idname', idname);
    }
    if(delFolder){
        data.append('delFolder', delFolder);
    }

    await fetchPost(url, data);

    return data
}

export default removeElData