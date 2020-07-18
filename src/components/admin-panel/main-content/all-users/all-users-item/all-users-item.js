const { default: Component } = require("../../../../../core/Component");
import './all-users-item.css'
import store from '../../../../../store/store';
import UsersProfile from '../../users-profile/users-profile';


class AllUsersItem extends Component {
    constructor(id) {
        super(id);
        this.insertHTML(html)
        fetchAp();
    }
}

let html = `<div>Загрузка...</div>`;

//получает всех users
const fetchAp = () => {
    const url = 'http://localhost:8080/api/backend/allUsers.php/?key=admin';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const localState = store.getState();
            stateUpdate(data, localState);
            return allUsersItemHtml(data)
        })
        .then(preparedHtml => { allUsersItemHtmlInsert(preparedHtml) })
        .then(() => {userItemEventHandler()})
}

// формирует html список пользователей на основе полученных данных 
const allUsersItemHtml = (data) => {
    console.log(data);
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
    const targetIns = document.getElementById('all-users');
    targetIns.innerHTML = '';
    targetIns.insertAdjacentHTML('beforeEnd', preparedHtml);
}

//записывает response data в state.users
const stateUpdate = (data, state) => {
    state.users = data;
}

//добовляет addEventListner на list user item и 
const userItemEventHandler = () => {
    let allUserItems = document.querySelectorAll('.all-users-item');
    allUserItems.forEach(item => {
        item.addEventListener('click', () => {
            const usersId = item.dataset.id
            const modalUserProfile = new UsersProfile('admin-panel', usersId);
          
        })
    })
}

//активрует (создает объект класса UserProfile) модельное окно подробного просмотра профиля

export default AllUsersItem