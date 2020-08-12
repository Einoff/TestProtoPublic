const { default: Component } = require("../../../../../core/Component");
import './all-users-item.css'
import UsersProfile from '../../users-profile/users-profile';
import Search from '../../search/search';
import { store } from '../../../../../index';


class AllUsersItem extends Component {
    constructor(id, modalProfile = true) {
        super(id);
        this.users = store.getState().users;
        this.insertHTML(html);
        this.modalProfile = modalProfile;
        getUsersList(this.users, this.modalProfile);
    }

}

let html = ` <div id="search-target" class="all-users-item-list-wrapp"> 
        <div class="all-users-item-list" id="allUsersItemTarget">
        </div>
     </div> 
`;

const getUsersList = (users, modalProfile) => {
    allUsersItemHtmlInsert(users, modalProfile);
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
        </div>
        `
    }).join('')

    return allUsersHtml
}

//добавление загруженных и обработанных данных в html
const allUsersItemHtmlInsert = async (users, modalProfile) => {
    const preparedHtml = await allUsersItemHtml(users);
    const targetIns = document.getElementById('allUsersItemTarget');
    // targetIns.innerHTML = '';
    targetIns.insertAdjacentHTML('beforeEnd', preparedHtml);
    userItemEventHandler(modalProfile);
}


//добовляет addEventListner на list user item для просмотра профиля

const userItemEventHandler = (modalProfile) => {
    if(modalProfile){
        let allUserItems = document.querySelectorAll('.all-users-item');
        allUserItems.forEach(item => {
            item.addEventListener('click', () => {
                let usersId = item.dataset.id
                const modalUserProfile = new UsersProfile('admin-panel', usersId);
    
            })
        })
    }

}

//Добавляет поиск 
const addSearch = () => {
    const newSearch = new Search('search-target', 'afterbegin');
}

export default AllUsersItem