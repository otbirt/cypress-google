describe('Google Test', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com')
    })

    it('Comprueba si carga la imagen en la página', () => {
        cy.get('[src="/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"]')
    })

    it('Comprueba que el título contiene "Google"', () => {
        cy.get('title').should('have.text', 'Google')
    })

    it('Comprueba que funciona el buscador', () => {
        cy.get('[type="text"]').type('QA test', {force: true})
        cy.get('form').submit()
    })
})