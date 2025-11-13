import { BasePage } from "./basePage"



export class LoginUser extends BasePage {

    inputUsername = '[data-test="username"]'
    inputPassword = '[data-test="password"]'
    btnSubmitLogin = '[data-test="login-button"]'
    logoApp = '[class="app_logo"]'
    titleProducts = '[data-test="title"]'
    errorBox = '[data-test="error-button"]'
    message = '[data-test="error"]'


    loggedUser(user) {

        this.visit(Cypress.env('baseUrl'))

        this.type(this.inputUsername, user.username)

        this.type(this.inputPassword, user.password)

        this.click(this.btnSubmitLogin)

        this.beVisible(this.logoApp)

        this.beVisible(this.titleProducts)

        this.include(this.titleProducts, user.title)
    }


    errorUser(user) {

        this.visit(Cypress.env('baseUrl'))

        this.type(this.inputUsername, user.username)

        this.type(this.inputPassword, user.password)

        this.click(this.btnSubmitLogin)

        this.beVisible(this.errorBox)

        this.haveText(this.message, user.title)
    }

    loggedUserOK(user) {

        this.visit(Cypress.env('baseUrl'))

        this.type(this.inputUsername, user.username)

        this.type(this.inputPassword, user.password)

        this.click(this.btnSubmitLogin)

        
    }

}