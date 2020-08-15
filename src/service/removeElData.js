const removeElData = (id, targetTable) => {

    let data = new FormData();
    data.append('id', id);
    data.append('targetTable', targetTable);

    return data
}

export default removeElData