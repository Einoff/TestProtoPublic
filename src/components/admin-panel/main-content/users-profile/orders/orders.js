const { default: Component } = require("../../../../../core/Component");
import './orders.css'

class Order extends Component {
    constructor(id) {
        super(id);
        this.insertHTML(html);
        closeOrderModal();
    }
}

const closeOrderModal = () => {
    const order = document.getElementById('order');
    order.addEventListener('click', (e) => {
        if (e.target.id == 'order-close' || e.target.id == 'order') {
            order.remove();
        }
    })
}

const html = `
<div class="order" id="order">
<div class="order__inner">
<div class="order__close" id="order-close"></div>
    <div class="order__top">
        <div class="order-title">Покупка #1000.</div>
        <div class="order__name-session">[Название фотосессии]</div>
    </div>
    <div class="order__info">
        <div class="order__info-photo">
            <img src="https://e-literaci.pl/upload/1580728826.jpg" alt="" class="order__info-img">
        </div>
        <div class="order__info-details">
            <div class="order__info-details-row">
                <div class="order__info-details-name">Продукт</div>
                <div class="order__info-details-value">[Название фотосессии]</div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Номер покупки</div>
                <div class="order__info-details-value">1000</div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Дата</div>
                <div class="order__info-details-value">(Дата)</div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Статус</div>
                <div class="order__info-details-value">Завершен</div>
            </div>
            <div class="order__info-details-row">
                <div class="order__info-details-name">Стоимость</div>
                <div class="order__info-details-value">5990руб</div>
            </div>
        </div>
    </div>
    <div class="order-download">
        <div class="order-download__title">Материалы к выдаче</div>
        <div class="order-download__table">
                <div class="order-download__table-row">
                    <div class="order-download__table-info">Состав</div>
                    <div class="order-download__table-info">Статус</div>
                    <div class="order-download__table-info">Дата</div>
                    <div class="order-download__table-info">Скачать</div>
                    <div class="order-download__table-info">Размер</div>
                </div>
                <div class="order-download__table-row">
                    <div class="order-download__table-info">Фотографии Full</div>
                    <div class="order-download__table-info">Завершен</div>
                    <div class="order-download__table-info">Пт 10 Июл 22-41</div>
                    <div class="order-download__table-info">Архив</div>
                    <div class="order-download__table-info order-tabe__row-content">1 Mb</div>

                </div>
                <div class="order-download__table-row">
                    <div class="order-download__table-info">Первые снимки</div>
                    <div class="order-download__table-info">Завершен</div>
                    <div class="order-download__table-info">Пт 10 Июл 22-41</div>
                    <div class="order-download__table-info">Архив</div>
                    <div class="order-download__table-info order-tabe__row-content">1 Mb</div>

                </div>
        </div>

        
    </div>
    <div class="order__gallery">
            <div class="order__gallery-title">
                <div class="order__gallery-itm">Фото</div>
                <div class="order__gallery-itm">Видео</div>
                <div class="order__gallery-itm">Локация</div>
            </div>
            <div class="order__gallery-items" id="order-gallery">

            </div>
        </div>
</div>
</div>
`


export default Order