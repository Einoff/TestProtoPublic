const { default: Component } = require("../../../../core/Component");
import './add-users.css'
import addUser from './add-users.templ-html';

class AddNewUsers extends Component{
    constructor(id){
        super(id)
        this.insertHTML(html);
        addUsersFormHandler();
    }
} 

const html = addUser();

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