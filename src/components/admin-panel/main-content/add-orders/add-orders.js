const { default: Component } = require("../../../../core/Component");
const { default: addOrdersHtml } = require("./add-orders.templ-html");
import './add-orders.css'
import AllUsersItem from '../add-users/all-users-item/all-users-item';
import { store } from '../../../../index';
import updateState from '../../../../service/updateState';

class AddOrders extends Component {
    constructor(id) {
        super(id);
        this.prodItems = store.getState().prodItems;
        this.fetchUrl = store.getState().fetchUrl.addOrder;
        this.insertHTML(addOrdersHtml(this.prodItems));
        BtnHandler();
        pushNewOrderOnServer(this.fetchUrl);
    }
}

// let html = addOrdersHtml();

const BtnHandler = () => {
    const addUsersBtninOrder = document.getElementById('btn-wrapp');
    const newUsersInput = document.getElementById('newUsersInput');
    const allUsersInOrderBlock = document.getElementById('allUsersInOrder');
    const allUsersInOrder = document.getElementById('allUsersInOrder');
    let orderInputId = document.getElementById('order-input-id');
    const clientInput = document.querySelector('.add-orders__client');
    const clientPhoto = document.querySelector('.client-photo');
    const clientName = document.querySelector('.client-name');

    addUsersBtninOrder.addEventListener('click', (e) => {
        // добавить существующего пользователя из списка
        if (e.target.id == 'addUserBtn') {
            clientInput.style.display = 'flex';
            allUsersInOrderBlock.innerHTML = '';
            addOldUsers();
        }
        //добавить новго пользователя
        else if (e.target.id == 'addNewUserBtn') {
            clientInput.style.display = 'none';
            allUsersInOrderBlock.innerHTML = '';
            addNewUsers();

        }
    })

    const addOldUsers = () => {
        newUsersInput.classList.add('display-none');
        allUsersInOrderBlock.innerHTML = '';
        const allUsersList = new AllUsersItem('allUsersInOrder', false);
        const orderUsersList = document.getElementById('allUsersItemTarget');
        const addOrdersEl = document.querySelector('.add-orders');

        orderUsersList.addEventListener('click', (e) => {
            if (e.target.closest('.all-users-item')) {

                const currentItem = e.target.closest('.all-users-item');
                const nameUser = currentItem.querySelector('.all-users-item__name').innerText;
                const urlAvatar = currentItem.querySelector('.all-users-item__photo').getAttribute('src');
                clientPhoto.setAttribute('src', urlAvatar);
                clientName.innerHTML = nameUser;
                const userId = currentItem.dataset.id;
                orderInputId.value = userId;
                clientInput.style.border = '2px solid #33ff2cea';
                allUsersInOrderBlock.innerHTML = '';
                addOrdersEl.scroll(0, 0);
            }
        })
    }

    const addNewUsers = () => {
        allUsersInOrder.innerHTML = '';
        newUsersInput.classList.toggle('display-none');
        orderInputId.value = '';
        clientPhoto.setAttribute('src', '');
        clientName.innerHTML = 'Клиент не выбран';
        clientInput.style.border = '2px solid #ff6247ea';

    }
}

const pushNewOrderOnServer = (fetchUrl) => {
    const orderForm = document.getElementById('add-order');
    const addOrderBtn = document.getElementById('add-order-btn');
    addOrderBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        
        if(validator()){
            const url = fetchUrl;
            const formData = new FormData(orderForm);
            await fetch(url, {method: 'POST', body: formData});
            updateState('orders');
        }

    })
}
const validator = () => {
    const uName = document.getElementById('o-uname').value;
    const uEmail = document.getElementById('o-uemail').value;
    const id = document.getElementById('order-input-id').value;
    if(!uName && !uEmail && !id){
        alert('не выбран пользователь!!!')
        return false
    }else{
        return true
    }
}


export default AddOrders
