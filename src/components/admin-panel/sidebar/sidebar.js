const { default: Component } = require("../../../core/Component");
import './sidebar.css'

class Sidbar extends Component{
    constructor(id){
        super(id)
        this.insertHTML(html)
    }
}

const html =  `
    <div class="sidebar">
        <div class="admin-panel__logo"></div>
        <ul class="sidebar__items">
            <li><a href="#addusers" class="sidebar__item">Добавить пользователя</a></li>
            <li><a href="#allusers" class="sidebar__item">Список клиентов</a></li>
            <li><a href="#orders-list" class="sidebar__item">Список заказов</a></li>
            <li><a href="#" class="sidebar__item">Element 2</a></li>
            <li><a href="#" class="sidebar__item">Element 3</a></li>
            <li><a href="#" class="sidebar__item">Element 4</a></li>
            <li><a href="#" class="sidebar__item">Element 5</a></li>
            <li><a href="#" class="sidebar__item">Element 6</a></li>
        </ul>
    </div>
    `


export default Sidbar