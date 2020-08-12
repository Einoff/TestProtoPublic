const sidebarHtml = () => {
return`
<div class="sidebar">
    <div class="sidebar__inner">
        <div class="admin-panel__logo"></div>
        <ul class="sidebar__items">
            <li><a href="#addusers" class="sidebar__item">Добавить пользователя</a></li>
            <li><a href="#allusers" class="sidebar__item">Список пользователей</a></li>
            <li><a href="#addorders" class="sidebar__item">Добавить заказ</a></li>
            <li><a href="#allorders" class="sidebar__item">Список заказов</a></li>
            <li><a href="#setting" class="sidebar__item">Настройки</a></li>
            <li><a href="#" class="sidebar__item">Element 3</a></li>
            <li><a href="#" class="sidebar__item">Element 4</a></li>
            <li><a href="#" class="sidebar__item">Element 5</a></li>
            <li><a href="#" class="sidebar__item">Element 6</a></li>
        </ul>
    </div>
</div>
`
}

export default sidebarHtml