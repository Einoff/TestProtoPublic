// import { store } from '../../index';

const ClPanelHtml = (onum, state) => {

    const gallery = state.galleryData.find(item => item.id == onum).gallery;
    const currentOrder = state.orders.find(item => item.onum === onum);
    let ImgNumData = 0;
    const galleryImgHtml = gallery.reduce((accum, item) => {
        return `
            ${accum}
            <div class="client-panel__gallery-item">
                <a href="./assets/image/orders/${onum}/${item}" download>
                    <img src="./assets/image/templ-img/templ/download2.svg" alt="dwl" class="client-panel__gallery-item-download">
                </a>
                <img src="./assets/image/orders/${onum}p/${item}" alt="img" class="client-panel__gallery-item-img imgMododalJs" data-numi="${ImgNumData++}">
            </div>
        `
    }, '')
    const ListOfOrdersHtml = state.orders.reduce((accum, item) => {
        return `
            ${accum}
            <div class="client-panel__myorders-item">
                <div class="client-panel__myorders-img">
                    <img src="./assets/image/orders/${item.onum}p/${item.oimg}" alt="img">
                </div>
                <div class="client-panel__myorders-content">
                    <div class="client-panel__myorders-title">${item.oname}</div>
                    <div class="client-panel__myorders-date">${item.fdate}</div>
                </div>
            </div>
        `
    }, '')

    return `
        <div class="client-panel">
            <div class="client-panel__inner">
                
                <div class="cp-close-btn tooltip-close" id="cpCloseBtn">✘</div>
                <!-- header -->
                <div class="client-panel__header cp-header" style="background-image: url('./assets/image/orders/${onum}p/${currentOrder.oimg}')">
                    <div class="cp-header__title">${currentOrder.oname}</div>
                    <div class="cp_header__date">${currentOrder.edate}</div>
                    <div class="cp_header__sitelink">VOLYNSKA</div>
                    
                </div>

                <!-- nav panel -->
                <div class="client-panel__nav">
                    <div class="client-panel__myorders-wrapp display-none" id="myordersWrap">
                        <div class="client-panel__myorders">
                            <!-- <div class="cp__myorders-hide">&raquo;</div> -->
                            ${ListOfOrdersHtml}
                        </div>
                    </div>
                        <div class="client-panel__nav-l">
                            <div class="client-panel__nav-title">${currentOrder.oname}</div>
                        </div>
                        <div class="client-panel__nav-r">
                            <div class="client-panel__nav-itm" id="myOrders">Мои фотосессии</div>
                            <div class="client-panel__nav-itm">
                                <a href="${currentOrder.fullarchiv}" download>
                                    Скачать
                                </a>
                            </div>       
                        </div>
                    
                </div>

                <!-- gallery -->
                <div class="client-panel__gallery" id="cpGallery">

                    <!-- modal -->
                    <div class="cl-p_gallery-modal display-none" id="clGalleryModalWrap">
                        <div class="cl-p_gallery-modal-inner">
                            <img src="" alt="images" class="cl-p_gallery-modal-img">
                            <div class="cl-p_gallery-modal-close" id="clGalleryClose">✘</div>
                            <div class="cl-p_gallery-modal-nav">
                                <div class="cl-p_gallery-modal-nav-btn" id="g-modal-prev">&laquo;</div>
                                <div class="cl-p_gallery-modal-nav-btn" id="g-modal-next">&raquo;</div>
                            </div>
                        </div>
                    </div>

                   ${galleryImgHtml}
                </div>
            </div>
        </div>
    `
}

export default ClPanelHtml