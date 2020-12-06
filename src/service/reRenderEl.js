const reRenderEl = async (targetId, className, stateName) => {
    const mainContent = document.getElementById(targetId);
    mainContent.innerHTML = '';
    const createEl = await new className(targetId, stateName);
    debugger
}

export default reRenderEl