const { store } = require("../../../../index")

const userProfileHtml = () => {
    
    return`
    <div class="users-profile" id="profile-modal">
        
    <div class="users-profile__inner">
         <div class="users-profile__close" id="modal-close"></div>
        <div class="users-profile__personal">
            <div class="users-profile__p-photo">ФОТО</div>
            <div class="users-profile__p-info">
            <div>Имя</div>
            <div>Фамилия</div>
            <div>Email</div>
            <div>Др</div>
        </div>
        <div class="users-profile__contacts">
            <div>Телефон</div>
            <div>Адрес</div>
            <div>емаил</div>
            <div>Телеграм</div>
            <div>Скайп</div>
        </div>
        </div>
        <div class="users-profile__orders" id="users-order-list">

        </div>
    </div>
        </div>    
    </div>
</div> 
    `
}

