// import { store } from "../../../index";


let topPanelHtml = (state) => {
const { fname, lname, img } = state.who
return `
<div class="top-panel">
    <div class="top-panel__title" id="setTitle">
        Заголовок
    </div>
    <div class="top-panel__profile">
        <div class="top-panel__profile-user">
            <img class="top-panel__userpic-img" src="../../../assets/image/templ-img/avatars/${img || '1595777852.png'}"
                alt="userpic">

            <div class="top-panel__profile-name" id="pf-name">${fname}</div>
            <!-- <div class="top-panel__profile-status" id="pf-status"></div> -->
        </div>
        <ul class="top-panel__profile-nav">
            <li><a href="#" class="top-panel__profile-nav-link">Element 1</a></li>
            <li><a href="#" class="top-panel__profile-nav-link">Element 2</a></li>
            <li><a href="#" class="top-panel__profile-nav-link">Element 3</a></li>
            <li><a href="#" class="top-panel__profile-nav-link">Element 4</a></li>
        </ul>
    </div>
</div>
`
}

export default topPanelHtml