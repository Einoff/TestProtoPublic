const { default: Component } = require("../../../../core/Component");
import { store } from '../../../../index';
import convertIndexToValue from '../../../../service/convertIndexToValue';

class OrdersEditForm extends Component {
    constructor(id, currentOrders) {
        super(id)
        this.insertHTML(html(currentOrders));
    }
}

const html = (currentOrders) => {
    let { onum, oname, cdate, edate, fdate, fullprice, currency, ostatus, itemprice, ocomments, tsession, osource, oimg } = currentOrders;

    const arrayItemPrice = itemprice.split(',');

    const itemProdHtml = store.getState().prodItems.reduce((accum, item) => {
        let isChecked = arrayItemPrice.includes(item.id);

        const accumHtml = `
            <label class="order-prod-edit">
                <input type="checkbox" ${isChecked ? 'checked' : ''} name="itemprice[]" value="${item.id}"/>
                ${item.product}
            </label>
        `
        return accumHtml + accum
    }, '');

    const prodItemsValue = convertIndexToValue('prodItems', itemprice, true);
    const tsessionValue = convertIndexToValue('typesessionlist', tsession);
    const osourceValue = convertIndexToValue('sourceorderlist', osource);
    const ostatusValue = convertIndexToValue('ostatuslist', ostatus);

    return `

        <form class="order__info-wrap" id="orderEditFormId" data-orderID="${onum}">
            <div class="order__info-photo">
                <img src="../../../../assets/image/orders/${onum}p/${oimg}" alt="" class="order__info-img">
            </div>
            <div class="order__info-details">
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Продукт:</div>
                    <div class="order__info-details-value">
                        <input type="text" name="oname" value="${oname}" class="orderEditInput" disabled>
                    </div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Тип фотосесси:</div>
                    <div class="order__info-details-value">
                        <select name="tsession" id="typesessionlist" class="orderEditInput" disabled>
                            <option value="">${tsessionValue || ''}</option>
                        </select>
                        <!-- <input type="text" name="tsession" value="${tsession || ''}" class="orderEditInput" disabled> -->
                    </div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Источник:</div>
                    <div class="order__info-details-value">
                        <select name="osource" id="sourceorderlist" class="orderEditInput" disabled>
                            <option value="">${osourceValue || ''}</option>
                        </select>
                        <!-- <input type="text" name="osource" value="${osource || ''}" class="orderEditInput" disabled> -->

                    </div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Дата создания:</div>
                    <div class="order__info-details-value">
                        <input type="date" name="cdate" value="${cdate || ''}" class="orderEditInput" disabled>

                    </div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Дата события:</div>
                    <div class="order__info-details-value">
                        <input type="date" name="edate" value="${edate || ''}" class="orderEditInput" disabled>

                    </div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Дата завершения:</div>
                    <div class="order__info-details-value">
                        <input type="date" name="fdate" value="${fdate || ''}" class="orderEditInput" disabled>

                    </div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Статус:</div>
                    <div class="order__info-details-value">
                        <select name="ostatus" id="ostatuslist" class="orderEditInput" disabled>
                            <option value="">${ostatusValue || ''}</option>
                        </select>
                        <!-- <input type="text" name="ostatus" value="${ostatus || ''}" class="orderEditInput" disabled> -->

                    </div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Стоимость, ${currency}:</div>
                    <div class="order__info-details-value">
                        <input type="text" name="fullprice" value="${fullprice || ''}" class="orderEditInput" disabled>
                    </div>
                </div>
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Товары:</div>
                    <div class="order__info-details-value">
                        <div class="order__itemProd">
                            ${prodItemsValue}
                        </div>
                        <div class="order__prod-edit display-none">
                            ${itemProdHtml}
                        </div>
                    </div>
                </div>
                
                <div class="order__info-details-row">
                    <div class="order__info-details-name">Комментарии:</div>
                    <div class="order__info-details-value">
                        <input type="text" name="ocomments" value="${ocomments}" class="orderEditInput" disabled>
                    </div>
                </div>
                <input type="hidden" name="onum" value="${onum}" class="orderEditInput" disabled>
                <div class="order__info-details-row display-none" id="orderEditImg">
                    <div class="order__info-details-name">Изображение:</div>
                    <div class="order__info-details-value">
                        <input type="file" name="oimg">
                    </div>
                </div>
                <button class="order-edit-submit display-none" id="orderEditSubmit">Изменить</button>
            </div>

        </form>
        `
}

export default OrdersEditForm