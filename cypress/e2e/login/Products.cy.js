
import { LoginUser } from '../../Pages/loginPage';
import { AddProducts } from '../../Pages/ProductsPage';
import { UserOk } from '../../fixtures/userData';


describe("Escenarios Productos", () => {

    it("Add 6 Products to Cart", () => {

        const loginUser = new LoginUser();
        const products = new AddProducts();

        loginUser.loggedUserOK(UserOk)
        products.AddToCartProducts_6();

    })

    it("Remove 3 Products from Cart", () => {

        const loginUser = new LoginUser();
        const products = new AddProducts();

        loginUser.loggedUserOK(UserOk)
        products.AddToCartProducts_6();
        products.RemoveProducts3()

    })





})