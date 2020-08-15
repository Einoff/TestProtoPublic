const { default: Component } = require("../../../../../core/Component");
import './all-users-item.css'
import UsersProfile from '../../users-profile/users-profile';
import Search from '../../search/search';
import { store } from '../../../../../index';
import removeElData from '../../../../../service/removeElData';
import fetchPost from '../../../../../service/fetchPost';
import updateState from '../../../../../service/updateState';
import reRenderEl from '../../../../../service/reRenderEl';


class AllUsersItem extends Component {
    constructor(id, modalProfile = true) {
        super(id);
        this.users = store.getState().users;
        this.insertHTML(html);
        this.modalProfile = modalProfile;
        this.fetchUrl = store.getState().fetchUrl.removeElUrl;
        getUsersList(this.users, this.modalProfile, this.fetchUrl);
    }

}

let html = ` <div id="search-target" class="all-users-item-list-wrapp"> 
        <div class="all-users-item-list" id="allUsersItemTarget">
        </div>
     </div> 
`;

const getUsersList = (users, modalProfile, fetchUrl) => {
    allUsersItemHtmlInsert(users, modalProfile, fetchUrl);
}

// формирует html список пользователей на основе полученных данных 
const allUsersItemHtml = (users) => {
    let allUsersHtml = users.map(user => {
        return `
        <div class="all-users-item" data-id="${user.id}">
            <div class="all-users-item__photo-wrapp">
                <img src="../../../../../assets/image/templ-img/avatars/${user.img}" alt="avatar" class="all-users-item__photo">
            </div>
            <div class="all-users-item__name search-js">${user.fname} ${user.lname}</div>
            <div class="all-users-item__email">${user.email}</div>
            <div class="all-users-item__tel">${user.tel}</div>
            <div class="all-users-item__del user-del-Js">&#10008;</div>
        </div>
        `
    }).join('')

    return allUsersHtml
}

//добавление загруженных и обработанных данных в html
const allUsersItemHtmlInsert = async (users, modalProfile, fetchUrl) => {
    const preparedHtml = await allUsersItemHtml(users);
    const targetIns = document.getElementById('allUsersItemTarget');
    // targetIns.innerHTML = '';
    targetIns.insertAdjacentHTML('beforeEnd', preparedHtml);
    userItemEventHandler(modalProfile, fetchUrl);
}


//добовляет addEventListner на list user item для просмотра профиля

const userItemEventHandler = (modalProfile, fetchUrl) => {
    if(modalProfile){
        let allUserItems = document.querySelectorAll('.all-users-item');
        allUserItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const userId = item.dataset.id
                if(e.target.classList.contains('user-del-Js')){
                    removeUser(userId, fetchUrl);
                }else{
                    const modalUserProfile = new UsersProfile('admin-panel', userId);
                }

    
            })
        })
    }

}

//удалить пользователя из списка
const removeUser = async(userId, fetchUrl) => {
    const url = fetchUrl;
    const table = 'cab_users';
    const data = removeElData(userId, table);
    const targetId = 'main-content';
    await fetchPost(url, data);
    await updateState('users');
    reRenderEl(targetId, AllUsersItem)
    // const mainContent = document.getElementById(targetId);
    // mainContent.innerHTML = '';
    // const allUsersItem = new AllUsersItem(targetId);
}

//Добавляет поиск 
const addSearch = () => {
    const newSearch = new Search('search-target', 'afterbegin');
}

export default AllUsersItem