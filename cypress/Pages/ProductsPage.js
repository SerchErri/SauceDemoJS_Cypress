import { BasePage } from "./basePage"




export class AddProducts extends BasePage {

    btnAddProductBackpack = '[data-test="add-to-cart-sauce-labs-backpack"]'
    btnAddProductBokeLigh = '[data-test="add-to-cart-sauce-labs-bike-light"]'
    btnAddProductBoltTshirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    btnAddProductFleeceJacket = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
    btnAddProductOnesie = '[data-test="add-to-cart-sauce-labs-onesie"]'
    btnAddProductTshirtRed = '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    iconCart = '[data-test="shopping-cart-badge"]'
    btnCart = '[data-test="shopping-cart-link"]'
    titleCart = '[data-test="title"]'
    btnRemove = 'button.cart_button'
    title = 'Remove'


    bntRemoveBikeLight = '[data-test="remove-sauce-labs-bike-light"]'
    btnRemoveFleeceJacket = '[data-test="remove-sauce-labs-fleece-jacket"]'
    bntRemoveBoldTshirt = '[data-test="remove-sauce-labs-bolt-t-shirt"]'
    containerCart = '[data-test="cart-list"]'

    AddToCartProducts_6() {

        this.click(this.btnAddProductBackpack)
        this.click(this.btnAddProductBokeLigh)
        this.click(this.btnAddProductBoltTshirt)
        this.click(this.btnAddProductFleeceJacket)
        this.click(this.btnAddProductOnesie)
        this.click(this.btnAddProductTshirtRed)

        this.haveText(this.iconCart, '6')
        this.click(this.btnCart)

        this.beVisible(this.titleCart)

        this.assertRemoveButtons(this.btnRemove, 6)

    }


   RemoveProducts3() {

        this.click(this.bntRemoveBikeLight)
        this.click(this.btnRemoveFleeceJacket)
        this.click(this.bntRemoveBoldTshirt)

        this.haveText(this.iconCart, '3')
        
        this.beVisible(this.titleCart)

        this.assertRemoveItems(this.btnRemove, 3)

    }


}