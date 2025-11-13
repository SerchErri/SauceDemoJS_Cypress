import { BasePage } from "./basePage"

export class CompleteForm extends BasePage {

    btnCart = '[data-test="shopping-cart-link"]'
    btnCheckOut = '[data-test="checkout"]'
    inputFisrtName = '[data-test="firstName"]'
    inputLastNem = '[data-test="lastName"]'
    inputZipCode = '[data-test="postalCode"]'
    btnContinue = '[data-test="continue"]'
    endPointCart = '/checkout-step-one.html'
    endPointFinish = '/checkout-step-two.html'
    titleCheckOut = '[data-test="title"]'
    btnFinish = '[data-test="finish"]'
    titleCheckOutComplete = '[data-test="title"]'
    endPointCheckComplete = '/checkout-complete.html'



    FillOutFormOK(custom) {

        this.click(this.btnCart)

        this.click(this.btnCheckOut)

        this.validateUrl(this.endPointCart)

        this.type(this.inputFisrtName, custom.customFirstName)
        this.type(this.inputLastNem, custom.customLastName)
        this.type(this.inputZipCode, custom.customZipCode)

        this.click(this.btnContinue)

        this.haveText(this.titleCheckOut, "Checkout: Overview")

        this.validateUrl(this.endPointFinish)
        this.click(this.btnFinish)
        this.validateUrl(this.endPointCheckComplete)
        this.haveText(this.titleCheckOutComplete, "Checkout: Complete!")

    }
}