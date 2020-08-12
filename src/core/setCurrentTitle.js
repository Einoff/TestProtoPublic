const setCurrentTitle = (text) => {
    const targetDiv = document.getElementById('setTitle');
    targetDiv.innerHTML = '';
    targetDiv.textContent = text;
}

export default setCurrentTitle