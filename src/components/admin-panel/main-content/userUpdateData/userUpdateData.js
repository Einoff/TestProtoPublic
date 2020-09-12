const { default: Component } = require("../../../../core/Component");
import './userUpdateData.css'
import { store } from '../../../../index';
import fetchPost from '../../../../service/fetchPost';
import updateState from '../../../../service/updateState';
import UsersProfile from '../users-profile/users-profile';

class UserUpdateData extends Component{
    constructor(id, userId){
        super(id);
        this.insertHTML(userUpdateHtml(userId));
        submitUserEdit();
        closeUserEditForm();
    }
}

const userUpdateHtml = (userId) => {
    const users = store.getState().users;
    const currentUser = users.find(user => user.id === userId);
    let {address, birthday, email, fname, id, img, insta, lname, tclient, tcontact, tel, ucomments, ucontact} = currentUser;
    return`
        <form class="edit-users__form" id="edit-u-form" data-id="${id}">
        Имя:
            <input type="hidden" value="${id}" name="id" id="uid" value="${id}"class="add-users__input">
            <input type="text" value="${fname}" name="fname" id="ufname" placeholder="Имя" class="add-users__input">
        Фамилия:
            <input type="text" value="${lname}" name="lname" placeholder="Фамилия" class="add-users__input">
        Email: 
            <input type="text" value="${email}" name="email" id="uemail" placeholder="Почта (email)" class="add-users__input">
        Телефон:   
            <input type="text" value="${tel}" name="tel" placeholder="Телефон" class="add-users__input">
        День рождения:   
            <input type="date" value="${birthday}" name="d-birth" placeholder="Дата рождения" class="add-users__input">
        Инстаграм:    
            <input type="text" value="${insta}" name="inst" placeholder="Instagram" class="add-users__input">
        Тип контакта:   
            <input type="text" value="${tcontact}" name="tcontact" placeholder="Тип контакта" class="add-users__input">
        Тип клиента:  
            <input type="text" value="${tclient}" name="tclient" placeholder="Категория клиента" class="add-users__input">
        Адрес:   
            <input type="text" value="${address}" name="address" placeholder="Адрес" class="add-users__input">
        Общаться в:  
            <input type="text" value="${ucontact}" name="ucontact" placeholder="общение в" class="add-users__input">
        
            <label for="t-area" class="t-area__label">
                <span class="t-area__title">Дополнительная информация:</span>
                <textarea name="ucomments" id="t-area" class="add-users__t-area">${ucomments}</textarea>
            </label>
        Аватар:   
            <label for="" class="add-users__file-label">
                <span class="t-area__file">Загрузить аватар:</span>
                <input type="file" name="photo" class="add-users__file">
            </label>
            <button class="add-users__btn" id="users__btn-edit">Изменить</button>
            <button type="button" class="add-users__btn" id="users__btn-close">Закрыть</button>
            <div class="add-users__confirm display-none" id="auconfirm">Пользователь изменён</div>
        </form>
    `
}

const submitUserEdit = () => {
    const editUForm = document.getElementById('edit-u-form');
    const id = editUForm.dataset.id;
    const url = store.getState().fetchUrl.updateUsersEdit;
    const profileModal = document.getElementById('profile-modal');
    editUForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(editUForm);
        profileModal.remove();
        await fetchPost(url, data);
        await updateState('users');
        const modalUserProfile = new UsersProfile('admin-panel', id);
    })
}

const closeUserEditForm = () => {
    const usersBtnClose = document.getElementById('users__btn-close');
    const editUForm = document.getElementById('edit-u-form');
    usersBtnClose.addEventListener('click', (e) => {
        editUForm.remove();
    })
}

export default UserUpdateData