
import { LoginUser } from '../../Pages/loginPage';
import { AddProducts } from '../../Pages/ProductsPage';
import { UserOk, customOK } from '../../fixtures/userData';
import { CompleteForm } from '../../Pages/checkOutPage';



describe("Escenarios CheckOut", () => {

    beforeEach(() => {
        const loginUser = new LoginUser();
        const products = new AddProducts();

        loginUser.loggedUserOK(UserOk)
        products.AddToCartProducts_6();

    });

    it("Complete Form with Valid Data", () => {

        const form = new CompleteForm();
        
        form.FillOutFormOK(customOK);


    })

})