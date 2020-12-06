const fetchPost = async (url, data) => {
    await fetch(url, {
        method: 'POST',
        body: data
    })
}

export default fetchPost