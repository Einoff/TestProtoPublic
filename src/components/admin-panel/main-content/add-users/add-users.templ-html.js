const addUser = () => {
return`
<div class="add-users">

    <form action="" class="add-users__form" id="add-u-form">
        <input type="text" name="fname" id="ufname" placeholder="Имя" class="add-users__input">
        <input type="text" name="lname" placeholder="Фамилия" class="add-users__input">
        <input type="text" name="email" id="uemail" placeholder="Почта (email)" class="add-users__input">
        <input type="text" name="tel" placeholder="Телефон" class="add-users__input">
        <input type="text" name="pass" id="upass" placeholder="Пароль" class="add-users__input">
        <input type="text" name="d-birth" placeholder="Дата рождения" class="add-users__input">
        <input type="text" name="inst" placeholder="Instagram" class="add-users__input">
        <input type="text" name="tcontact" placeholder="Тип контакта" class="add-users__input">
        <input type="text" name="tclient" placeholder="Категория клиента" class="add-users__input">
        <input type="text" name="address" placeholder="Адрес" class="add-users__input">
        <label for="t-area" class="t-area__label">
            <span class="t-area__title">Дополнительная информация:</span>
            <textarea name="comments" id="t-area" class="add-users__t-area"></textarea>
        </label>
        
        <label for="" class="add-users__file-label">
            <span class="t-area__file">Загрузить аватар:</span>
            <input type="file" name="photo" class="add-users__file">
        </label>
        <button class="add-users__btn">Добавить</button>
        <div class="add-users__confirm display-none" id="auconfirm">Пользователь добавлен</div>
    </form>
</div>
`
}

export default addUser