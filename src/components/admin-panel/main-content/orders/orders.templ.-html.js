let ordersHtml = (currentOrder) => {
    let {onum, oname, cdate, edate, fdate, fullprice, currency, ostatus, itemprice, ocomments, tsession, osource} = currentOrder
return`
<div class="order" id="order">
    <div class="order__inner">
        <div class="order__close" id="order-close"></div>
        <div class="order__top">
            <div class="order-title">Покупка #${onum}.</div>
            <div class="order__name-session">[${oname}]</div>
        </div>
        <div class="order__info">
            <div class="order__info-photo">
                <img src="https://e-literaci.pl/upload/1580728826.jpg" alt="" class="order__info-img">
            </div>
            <div class="order__info-details">
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Продукт</div>
                    <div class="order__info-details-value">[${oname}]</div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Тип фотосесси</div>
                    <div class="order__info-details-value">${tsession}</div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Источник</div>
                    <div class="order__info-details-value">${osource}</div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Дата создания</div>
                    <div class="order__info-details-value">${cdate}</div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Дата события</div>
                    <div class="order__info-details-value">${edate || 'не указано'}</div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Дата завершения</div>
                    <div class="order__info-details-value">${fdate || 'не указано'}</div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Статус</div>
                    <div class="order__info-details-value">${ostatus}</div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Стоимость</div>
                    <div class="order__info-details-value">${fullprice} ${currency}</div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Товары</div>
                    <div class="order__info-details-value">${itemprice}</div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Комментарии</div>
                    <div class="order__info-details-value">${ocomments}</div>
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
}

export default ordersHtml