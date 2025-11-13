import { LoginUser } from '../../Pages/loginPage';
import { testUsers } from '../../fixtures/userData';




describe("Escenarios Login", () => {

    const loginUser = new LoginUser()

    it("standard_user", () => {

        loginUser.loggedUser(testUsers[0])

    })

    it("locked_out_user", () => {

        loginUser.errorUser(testUsers[1])

    })

    it.only("problem_user", () => {

        loginUser.loggedUser(testUsers[2])

        loginUser.checkAllImagesAreEqual()

    })

    it("performance_glitch_user", () => {

        loginUser.loggedUser(testUsers[3])

        loginUser.validatePageLoadDelay()

    })

    it("visual_user", () => {

        loginUser.loggedUser(testUsers[4])

        loginUser.validateDifferentImages()

    });
});

