const { default: Component } = require("../../../../../core/Component");
import './all-users-item.css'
import store from '../../../../../store/store';
import UsersProfile from '../../users-profile/users-profile';


class AllUsersItem extends Component {
    constructor(id, modalProfile=true) {
        super(id);
        this.insertHTML(html);
        fetchAp(modalProfile);
    }
}

let html = `<div class="all-users-item-list" id="allUsersItemTarget">Загрузка...</div>`;

//получает всех users
const fetchAp = (modalProfile) => {
    const url = 'http://localhost:8080/api/backend/allUsers.php/?key=admin';
    fetch(url)
        .then(response => response.json())
        //мапит данные
        .then(data => allUsersItemHtml(data))
        .then(preparedHtml => { allUsersItemHtmlInsert(preparedHtml) })
        .then(() => {
            if(modalProfile){
                userItemEventHandler();
            }
        })
}

// формирует html список пользователей на основе полученных данных 
const allUsersItemHtml = (data) => {
    let allUsersHtml = data.map(user => {
        return `
        <div class="all-users-item" data-id="${user.id}">
            <div class="all-users-item__photo-wrapp">
                <img src="../../../../../assets/image/templ-img/avatars/${user.img}" alt="avatar" class="all-users-item__photo">
            </div>
            <div class="all-users-item__name">${user.fname} ${user.lname}</div>
            <div class="all-users-item__email">${user.email}</div>
            <div class="all-users-item__tel">${user.tel}</div>
        </div>
        `
    }).join('')

    return allUsersHtml
}

//добавление загруженных и обработанных данных в html
const allUsersItemHtmlInsert = (preparedHtml) => {
    const targetIns = document.getElementById('allUsersItemTarget');
    targetIns.innerHTML = '';
    targetIns.insertAdjacentHTML('beforeEnd', preparedHtml);
}

//записывает response data в state.users
// const stateUpdate = (data, state) => {
//     state.users = data;
// }

//добовляет addEventListner на list user item для просмотра профиля
const userItemEventHandler = () => {
    let allUserItems = document.querySelectorAll('.all-users-item');
    allUserItems.forEach(item => {
        item.addEventListener('click', () => {
            const usersId = item.dataset.id
            const modalUserProfile = new UsersProfile('admin-panel', usersId);
          
        })
    })
}

// //добовляет addEventListner на list user item для выбора пользователя в заказе
// const usersListEventOrder = () => {

// }

export default AllUsersItem