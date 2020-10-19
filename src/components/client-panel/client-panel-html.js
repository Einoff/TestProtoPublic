// import { store } from '../../index';

const ClPanelHtml = (onum, state) => {
    
    const gallery = state.galleryData.find(item => item.id == onum).gallery;
    const currentOrder = state.orders.find(item => item.onum === onum);
    
    console.log('current order', currentOrder);
    
    const galleryImgHtml = gallery.reduce((accum, item) => {
        return `
            ${accum}
            <div class="client-panel__gallery-item">
                <a href="../../assets/image/orders/${onum}/${item}" download>
                <img src="../../assets/image/templ-img/templ/download2.svg" alt="dwl" class="client-panel__gallery-item-download">
                </a>
                <img src="../../assets/image/orders/${onum}/${item}" alt="img" class="client-panel__gallery-item-img">
            </div>
        `
    },'')


    return`
        <div class="client-panel">
            <div class="client-panel__inner">
                
                <div class="cp-close-btn tooltip-close" id="cpCloseBtn">✘</div>
                <!-- header -->
                <div class="client-panel__header cp-header" style="background-image: url('../../assets/image/orders/${onum}/${currentOrder.oimg}')">
                    <div class="cp-header__title">${currentOrder.oname}</div>
                    <div class="cp_header__date">${currentOrder.edate}</div>
                    <div class="cp_header__sitelink">VOLYNSKA</div>
                    
                </div>

                <!-- nav panel -->
                <div class="client-panel__nav">
                    <div class="client-panel__nav-l">
                        <div class="client-panel__nav-title">${currentOrder.oname}</div>
                    </div>
                    <div class="client-panel__nav-r">
                        <div class="client-panel__nav-itm">Мои фотосессии</div>
                        <div class="client-panel__nav-itm">Скачать</div>       
                    </div>
                </div>

                <!-- gallery -->
                <div class="client-panel__gallery" id="cpGallery">
                   ${galleryImgHtml}
                </div>
            </div>
        </div>
    `
}

export default ClPanelHtml