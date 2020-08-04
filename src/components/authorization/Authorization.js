import Component from '../../core/Component'
import './authorization.css'
import authorization_html from './authorization.templ-html';
import { routerInit } from '../..';

class Authorization extends Component {
    constructor(id) {
        super(id);
        this.setRoutUrl('#authorization');
        this.insertHTML(html);
        // authorizationHandler();
        checkAuthkey();
    }
}

// Возвращает html разметку компонента
const html = authorization_html();


// Обробатывает события формы
const authorizationHandler = () => {

    const authForm = document.querySelector('.authorization__form');
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(authForm);
        authorizationFetch(formData, authForm);
    })
}

//проверяет authkey
const checkAuthkey = () => {
    const url = 'http://localhost:8080/api/backend/authauto.php';
    fetch(url)
    .then(response => response.text())
    .then(response => {
        let responseCode = response[0];
        switch (responseCode) {
            case '3':
                routerInit();
                setRout('#admin');
                break;
            case '0':
                authorizationHandler();
                break;
            default:
            // setRout('#user');
        }
    })
    // .then(() => {
    //     authorizationHandler();
    // })
}


// Отправляет запрос авторизации на сервер fetch enable
const authorizationFetch = (formData, authForm) => {
    const url = 'http://localhost:8080/api/backend/auth.php';
    fetch(url, {
        method: 'POST',
        body: formData,
        // credentials: 'include'
    })
        .then(response => response.text())
        .then(response => {
            let responseCode = response[0];
            switch (responseCode) {
                case '3':
                    routerInit();
                    setRout('#admin');
                    break;
                case '0':
                    insertUserNotFound(authForm);
                    break;
                default:
                // setRout('#user');
            }
        })
}


// устанавливает роутинг
const setRout = (target) => {

    window.location.href = target;
}

//показывает "нет такого пользователя"
const insertUserNotFound = (authForm) => {
    removeHtmlEl('.authorization-error');
    let html = `<div class="authorization-error">Пользователь не найден</div>`;
    authForm.insertAdjacentHTML('beforeEnd', html);

    setTimeout(() => {
        removeHtmlEl('.authorization-error');
    }, 3000)
}

//удалить элемент из DOM
const removeHtmlEl = (classEl) => {
    let el = document.querySelector(classEl);
    if (el) { el.remove() }
}


export default Authorization