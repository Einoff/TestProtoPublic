import Component from '../../core/Component'
import './authorization.css'

class Authorization extends Component {
    constructor(id) {
        super(id)
        this.setRoutUrl('#authorization');
        this.insertHTML(authorization_html());
        const authForm = document.querySelector('.authorization__form');
        authorizationHandler(authForm);
    }
}

// Возвращает html разметку компонента
const authorization_html = () => {
    return `
    <div class="authorization">
        <form  class="authorization__form">
        <input type="text" name="email" class="authorization__login" placeholder="email">
        <input type="text" name="pass" class="authorization__password" placeholder="password">
            <button class="authorization__btn">Войти</button>
        </form>
    </div>
    `
}

// Обробатывает события формы
const authorizationHandler = (authForm) => {
    
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(authForm);
        authorizationFetch(formData, authForm);
    })
}

// Отправляет запрос авторизации на сервер fetch enable
const authorizationFetch = (formData, authForm) => {
    const url = 'http://localhost:8080/api/backend/auth.php'
    fetch(url, {
        method: 'POST', 
        body: formData,
        // credentials: 'include'
    })
    .then(response => response.text())
    .then(response => {

        switch (+response){
            case 3:
                setRout('#admin');
                break;
            case 0: 
                insertUserNotFound(authForm)    
                break;
            default:
                setRout('#user');

        }
    })
}

// устанавливает роутинг
const setRout = (target) => {
    
    window.location.href = target;
}

//показывает "нет такого пользователя"
const insertUserNotFound = (authForm) => {
    removeHtmlEl ('.authorization-error');
    let html = `<div class="authorization-error">Пользователь не найден</div>`;
    authForm.insertAdjacentHTML('beforeEnd', html);

    setTimeout(() => {
        removeHtmlEl ('.authorization-error');
    },3000)
}

//удалить элемент из DOM
const removeHtmlEl = (classEl) => {
    let el = document.querySelector(classEl);
    if (el){el.remove()}
}

// Отправляет запрос авторизации на сервер xhr disable
const authorizationXHR = (formData) => {
    const url = 'http://localhost:8080/api/server/server.php'
    let xhr = new XMLHttpRequest(); 
    xhr.open('POST', url)
    xhr.send(formData)
}

export default Authorization