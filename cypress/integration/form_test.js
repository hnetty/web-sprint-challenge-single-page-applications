describe('Testing for text, selection, submit', () => {

    it('visiting the site', () => {
        cy.visit('localhost:3000/form')
    })

    it('can add text to the box', () => {
        cy.get('input[name=name]')
            .type('Harper')
            .should('have.value', 'Harper')
    })

    it('can select multiple toppings', () => {
        cy.get('input[type="checkbox"]').check()        
    })

    it('can submit form', () => {
        cy.get('form').submit()
    })


})