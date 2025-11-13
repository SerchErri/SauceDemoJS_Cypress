export class BasePage {

    visit(url) {

        cy.visit(url);
    }

    click(selector) {

        cy.get(selector).click()
    }


    type(selector, data) {

        cy.get(selector).type(data)
    }


    beVisible(selector) {

        cy.get(selector).should('be.visible')
    }

    include(selector, title) {

        cy.get(selector).invoke('text').should('include', title)
    }

    haveText(selector, title) {

        cy.get(selector).should('have.text', title)
    }

    validateUrl(endPoint) {
        cy.url().should('include', endPoint);
    }

    validateDifferentImages() {
        cy.get(".inventory_item_img img").then(($imgs) => {
            const sources = $imgs.map((i, el) => el.getAttribute("src")).get();

            const unique = new Set(sources);

            expect(unique.size, "debe haber al menos una imagen distinta (error visual)").to.be.greaterThan(1);
        })
    }

    validatePageLoadDelay() {

        const inicio = Date.now();

        cy.get('.inventory_list').should('be.visible').then(() => {

            const duracion = Date.now() - inicio;

            expect(duracion).to.be.greaterThan(3000); //tarda más de 3s

        });
    }


    checkAllImagesAreEqual() {
        cy.get('.inventory_list > .inventory_item img').then($img => {

            const sources = [];

            $img.each((i, element) => {
                const src = element.src;
                sources.push(src);
                cy.log('Imagen encontrada: ' + src);
            });

            cy.log('Cantidad de imágenes: ' + sources.length);

            expect(sources.length).to.eq(6);
        });
    }


    assertRemoveButtons(selector, expected = 6) {
        cy.get(selector).should('have.length', expected).each(($el) => {

            expect($el.text()).to.contain('Remove');
        });
    }

    assertRemoveItems(selector, expected = 3) {
        cy.get(selector).should('have.length', expected).each(($el) => {

            expect($el.text()).to.contain('Remove');
        });
    }

}