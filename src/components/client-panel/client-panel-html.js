// import { store } from '../../index';

const ClPanelHtml = (onum, state) => {
    
    const gallery = state.galleryData.find(item => item.id == onum).gallery;
    console.log(gallery);
    
    const galleryImgHtml = gallery.reduce((accum, item) => {
        
        return `
            ${accum}
            <div class="client-panel__gallery-item w4">
                <img src="../../assets/image/templ-img/templ/download2.svg" alt="dwl" class="client-panel__gallery-item-download">
                <img src="../../assets/image/orders/Photo___0002.jpg" alt="img" class="client-panel__gallery-item-img">
            </div>
        `
    },'')


    return`
        <div class="client-panel">
            <div class="client-panel__inner">

                <!-- header -->
                <div class="client-panel__header cp-header" style="background-image: url('../../assets/image/orders/Photo___0002.jpg')">
                    <div class="cp-header__title">Заголовок заказа</div>
                    <div class="cp_header__date">5th May, 2019</div>
                    <div class="cp_header__sitelink">VOLYNSKA</div>
                    
                </div>

                <!-- nav panel -->
                <div class="client-panel__nav">
                    <div class="client-panel__nav-l">
                        <div class="client-panel__nav-title">В посиках Землянки</div>
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