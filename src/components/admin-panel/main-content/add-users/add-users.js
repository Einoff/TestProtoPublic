const { default: Component } = require("../../../../core/Component");
import './add-users.css'
import addUser from './add-users.templ-html';
import { store } from '../../../../index';
import fetchPost from '../../../../service/fetchPost';
import updateState from '../../../../service/updateState';
import reRenderEl from '../../../../service/reRenderEl';

class AddNewUsers extends Component{
    constructor(id){
        super(id);
        this.fetchUrl = store.getState().fetchUrl.addUser
        this.insertHTML(html);
        addUsersFormHandler(this.fetchUrl);
    }
} 

const html = addUser();

const addUsersFormHandler = (fetchUrl) => {
    const addUserForm = document.getElementById('add-u-form');
    addUserForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if(validator()){
            const url = fetchUrl;
            const formData = new FormData(addUserForm);
            await fetchPost(url, formData);
            updateState('users');
            confirmAddUsers();
        }
    });
}


const validator = () => {
    const uName = document.getElementById('ufname').value;
    const uEmail = document.getElementById('uemail').value;
    const uPass = document.getElementById('upass').value;
    if(!uName && !uEmail && !uPass){
        alert('не выбран пользователь!!! \n Обязательные поля: имя, email, пароль')
        return false
    }else{
        return true
    }
}

const confirmAddUsers = () => {
    const confirmEl = document.getElementById('auconfirm');
    confirmEl.classList.remove('display-none');
    setTimeout(() => {
        confirmEl.classList.add('display-none');
    }, 1000)
}
    



export default AddNewUsers