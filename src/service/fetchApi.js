export const fetchApi = (url, method) => {
    return fetch(url, method).then(response => response.json());
}

