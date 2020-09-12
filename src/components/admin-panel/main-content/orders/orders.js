const { default: Component } = require("../../../../core/Component");
import './orders.css'
import ordersHtml from './orders.templ.-html';
import { store } from '../../../../index';
import UsersProfile from '../users-profile/users-profile';
import OrdersEditForm from './orders-edit-form';
import InsertListItems from '../get-lists-item/get-lists-item';


class Order extends Component {
    constructor(id, orderId) {
        super(id);
        this.orderId = orderId;
        this.orders = store.getState().orders;
        this.users = store.getState().users;
        this.currentOrders = this.orders.find(order => order.onum == this.orderId);
        this.currentUser = this.users.find(user => user.id === this.currentOrders.id);
        this.insertHTML(getCurrentOrder(this.currentOrders, this.currentUser));
        createOrdersEditForm(this.currentOrders);
        orderEditFormBtn();
        closeOrderModal();
        openUsers();
    }

}

const log = (info) => {
    console.log(info);
}
const getCurrentOrder = (currentOrders, user) => {    
    const html = ordersHtml(currentOrders, user);
    return html
}

const closeOrderModal = () => {
    const order = document.getElementById('order');
    if(order){
        order.addEventListener('click', (e) => {
            if (e.target.id == 'order-close' || e.target.id == 'order') {
                order.remove();
            }
        })
    }

}
const autoCloseOrderModal = () => {
    const order = document.getElementById('order');
    if(order){
        order.remove();
    }
}

const openUsers = () => {
    const userRef = document.querySelector('.order__top-user');
    const isProfileModal = document.getElementById('profile-modal');

    userRef.addEventListener('click', (e) => {
        const userId = e.currentTarget.dataset.uid;
        if(isProfileModal){
            autoCloseOrderModal();
            console.log('true');
        }else{
            autoCloseOrderModal();
            const newUserProfile = new UsersProfile('main-content', userId);
            console.log('false');
        }
    })
}

const createOrdersEditForm = (currentOrders) => {
    const orderInfoDetails = document.getElementById('orderInfoDetails');
    orderInfoDetails.innerHTML = '';
    const newOrdersEditForm = new OrdersEditForm('orderInfoDetails', currentOrders);
}

const orderEditFormBtn = () => {
    const getEditFormBtn = document.getElementById('orderEditBtn');
    const getOrderEditInputs = document.querySelectorAll('.orderEditInput');
    const orderEditImg = document.getElementById('orderEditImg');
    const orderEditSubmit = document.getElementById('orderEditSubmit');
    getEditFormBtn.addEventListener('click', (e)=> {
        const edit = getEditFormBtn.classList.contains('edit');
        if(edit){
            getEditFormBtn.classList.remove('edit');
            getOrderEditInputs.forEach(input => {
                input.disabled = true;
                input.classList.remove('orderEditInputActiv');
                orderEditImg.classList.add('display-none');
                orderEditSubmit.classList.add('display-none');
            })

        }else{
            getEditFormBtn.classList.add('edit');
            getOrderEditInputs.forEach(input => {
                input.disabled = false;
                input.classList.add('orderEditInputActiv');
                orderEditImg.classList.remove('display-none');
                orderEditSubmit.classList.remove('display-none');
                
            })
            addSelectionLists();
        }
        

    })
}
const addSelectionLists = () => {
    const tsession = new InsertListItems('typesessionlist');
    const osource = new InsertListItems('sourceorderlist');
    const ostatuslist = new InsertListItems('ostatuslist');
}

const orderEditSubmit = () => {
    const orderEditFormId = document.getElementById('orderEditFormId');
}
export default Order