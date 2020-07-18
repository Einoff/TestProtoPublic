const { default: Component } = require("../../../../core/Component");
import './users-profile.css'
import ListOfOrder from '../list-of-orders/list-of-orders';
import ListOfOrderItem from '../list-of-orders/list-of-orders-item/list-of-orders-item';

class UsersProfile extends Component {
    constructor(id, usersId) {
        super(id);
        this.insertHTML(html(usersId));
        closeModal();
        usersProfileOrdersList();
    }
}

let html = (usersId) => {
    return `
        <div class="users-profile" id="profile-modal">
        
        <div class="users-profile__inner">
             <div class="users-profile__close" id="modal-close"></div>
            <div class="users-profile__personal">
                <div class="users-profile__p-photo">ФОТО</div>
                <div class="users-profile__p-info">
                <div>Имя</div>
                <div>Фамилия</div>
                <div>Email</div>
                <div>Др</div>
            </div>
            <div class="users-profile__contacts">
                <div>Телефон</div>
                <div>Адрес</div>
                <div>емаил</div>
                <div>Телеграм</div>
                <div>Скайп</div>
            </div>
            </div>
            <div class="users-profile__orders" id="users-order-list">
 
            </div>
        </div>
            </div>    
        </div>
    </div> 
`
}

const usersProfileOrdersList = () => {
    const ordersList = new ListOfOrder('users-order-list'); 
    const ordersListItem = new ListOfOrderItem('l-order'); 
}

const closeModal = () => {
    const profileModal = document.getElementById('profile-modal');
    profileModal.addEventListener('click', (e) => {
        console.log(e.target.id);
        if(e.target.id == "profile-modal" || e.target.id == "modal-close"){
            profileModal.remove();
        }
    })
}

export default UsersProfile
