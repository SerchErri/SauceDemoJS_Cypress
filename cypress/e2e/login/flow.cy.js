import { LoginUser } from '../../Pages/loginPage';
import { AddProducts } from '../../Pages/ProductsPage';
import { UserOk, customOK } from '../../fixtures/userData';
import { CompleteForm } from '../../Pages/checkOutPage';


describe("endToEnd", () => {


    it("FlowOk", () => {
        const loginUser = new LoginUser();
        const products = new AddProducts();
        const form = new CompleteForm();

        loginUser.loggedUserOK(UserOk)
        products.AddToCartProducts_6();
        form.FillOutFormOK(customOK);
    })
})