const removeEl = async (id, targetTable, state, updateStateTarget) => {
    let data = new FormData();
    data.append('id', id);
    data.append('targetTable', targetTable);
    const url = state.fetchUrl.removeElUrl;
    await fetchPost(url, data);
    await updateState(updateStateTarget);
    const prodTarget = document.getElementById('prodItems');
    prodTarget.innerHTML = '';
    const prodItems = new ProdItems('prodItems');
}

export default removeEl