const authorization_html = () => {
    return `
    <div class="authorization">
        <form  class="authorization__form">
        <input type="text" name="login" class="authorization__login" placeholder="login">
        <input type="text" name="pass" class="authorization__password" placeholder="password">
            <button class="authorization__btn">Войти</button>
        </form>
    </div>
    `
}

export default authorization_html
