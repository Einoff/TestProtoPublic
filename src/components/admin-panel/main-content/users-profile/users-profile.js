const { default: Component } = require("../../../../core/Component");
import './users-profile.css'
import ListOfOrder from '../list-of-orders/list-of-orders';
import { store } from '../../../../index';
import UserUpdateData from '../userUpdateData/userUpdateData';

class UsersProfile extends Component {
    constructor(id, usersId) {
        super(id);
        this.users = store.getState().users
        this.insertHTML(usersProfilehtml(usersId, this.users));
        closeModal();
        usersProfileOrdersList(usersId);
        usersProfileEdit();
    }
}

let usersProfilehtml = (usersId, users) => {
    let user = users.find(elem => {
        if (elem.id == usersId) {
            return elem
        }
    });

    return `
<div class="users-profile" id="profile-modal">

    <div class="users-profile__inner">
        <div class="users-profile__close" id="modal-close"></div>
        <div class="users-profile__personal-wrapp">
            <div class="users-profile__personal">
            <div class="users-profile__edit" id="usersProfileEdit" data-id="${user.id}">
                ✎
            </div>
                <div class="users-profile__top">
                    <div class="users-profile__p-photo">
                        <img src="./assets/image/templ-img/avatars/${user.img}" alt="">
                    </div>
                    <div class="users-profile__p-info">
                        <div class="users-profile__name">${user.fname} ${user.lname}</div>
                    </div>
                </div>
                <div class="users-profile__contacts">
                    <div class="users-profile__item"><span>Телефон: </span> ${user.tel}</div>
                    <div class="users-profile__item"><span>Email: </span> ${user.email}</div>
                    <div class="users-profile__item"><span>Instagram : </span> ${user.insta}</div>
                    <div class="users-profile__item"><span>Общение в : </span> ${user.ucontact}</div>
                    <div class="users-profile__item"><span>Тип контакта: </span> ${user.tcontact}</div>
                    <div class="users-profile__item"><span>Категория клиента: </span> ${user.tclient}</div>
                    <div class="users-profile__item"><span>Дата рождения: </span> ${user.birthday}</div>
                    <div class="users-profile__item"><span>Адрес: </span> ${user.address}</div>
                    <div class="users-profile__item"><span>Комментарии: </span> ${user.ucomments}</div>
                </div>
            </div>
        </div>
        <div class="users-profile__orders" id="users-order-list">
            <div class="list-of-order_title">Список заказов:</div>
        </div>
    </div>
</div>
</div>
</div>
`
}

const usersProfileOrdersList = (usersId) => {
    const ordersList = new ListOfOrder('users-order-list', usersId, 'profile-order-item');
    // const ordersListItem = new ListOfOrderItem('l-order');
}

const usersProfileEdit = () => {
    const profileEditBtn = document.getElementById('usersProfileEdit');
    profileEditBtn.addEventListener('click', (e) => {
        const editUsersForm = document.querySelectorAll('.edit-users__form');
        if(editUsersForm.length > 0){
            editUsersForm.forEach(form => {
                form.remove();
            })
        }else{
            const userId = e.currentTarget.dataset.id
            const showUsersProfileEditForm = new UserUpdateData('users-order-list', userId);
        }

    })
}

const closeModal = () => {
    const profileModal = document.getElementById('profile-modal');
    profileModal.addEventListener('click', (e) => {
        if (e.target.id == "profile-modal" || e.target.id == "modal-close") {
            profileModal.remove();
        }
    })
}

export default UsersProfile