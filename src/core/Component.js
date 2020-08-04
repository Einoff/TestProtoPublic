export default class Component {
    constructor(id){
        this.el = document.getElementById(id);
    }

    //рендерит компонент в DOM
    insertHTML(html, target='beforeEnd'){
        this.el.insertAdjacentHTML(target, html);
    }

    //устанавливает адрес для роутинга
    setRoutUrl(urlRout){
        window.location.href = urlRout;
    }
    
}


