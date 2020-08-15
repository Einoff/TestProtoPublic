const reRenderEl = (targetId, className) => {
    console.log('reRender');
    const mainContent = document.getElementById(targetId);
    mainContent.innerHTML = '';
    const allUsersItem = new className(targetId);
}

export default reRenderEl