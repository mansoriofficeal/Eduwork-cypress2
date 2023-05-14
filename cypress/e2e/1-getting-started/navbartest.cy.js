describe('Navbar Test', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/')
    })
  
    it('Should navigate to online banking page', () => {
      cy.get('#onlineBankingMenu').click()
      cy.url().should('include', 'online-banking.html')
    })
  
    it('Should navigate to feedback page', () => {
      cy.get('#feedback').click()
      cy.url().should('include','feedback.html') 
    })
  
    it('Should navigate to homepage', () => {
      cy.contains('Zero Bank').click()
      cy.url().should('include', 'index.html')
    })
  })
  
