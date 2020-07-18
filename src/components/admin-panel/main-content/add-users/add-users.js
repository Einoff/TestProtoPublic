const { default: Component } = require("../../../../core/Component");
import './add-users.css'

class AddNewUsers extends Component{
    constructor(id){
        super(id)
        this.insertHTML(html);
        addUsersFormHandler();
    }
} 

const html = `
<div class="add-users">
<form action="" class="add-users__form" id="add-u-form">
    <input type="text" name="lname" placeholder="Фамилия" class="add-users__last-name">
    <input type="text" name="fname" placeholder="Имя" class="add-users__first-name">
    <input type="text" name="email" placeholder="Почта (email)" class="add-users__add-users__email">
    <input type="number" name="tel" placeholder="Телефон" class="add-users__add-users__tel">
    <input type="text" name="pass" placeholder="Пароль" class="add-users__add-users__password">
    <input type="file" name="photo" placeholder="Фото" class="add-users__photo">
    <button class="add-users__btn" value="addusers">Добавить</button>
</form>
</div>
`

const addUsersFormHandler = () => {
    const addUserForm = document.getElementById('add-u-form');

    addUserForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const url = 'http://localhost:8080/api/backend/addusers.php';
        const formData = new FormData(addUserForm);
        fetch(url, {method: 'POST', body: formData})
    });
}



export default AddNewUsers