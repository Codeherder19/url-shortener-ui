// Write Cypress tests for the following user flows (don't forget to stub your network requests):
//
// When a user visits the page, they can view the Form with the proper inputs
// When a user fills out the form, the information is reflected in the input fields

    describe('URL Shortener', () => {
    const baseUrl = 'http://localhost:3000';

    beforeEach(() => {
        cy
        .intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: 'getDummyData.json'})
        cy
        .visit(baseUrl);
          });

    it('user should be able to view page title', () => {
        cy
        .get('h1').contains('URL Shortener')
        cy
        .get('a:first').should('have.attr', 'href', 'http://localhost:3001/useshorturl/1')
        cy
        .get('a:last').should('have.attr', 'href', 'http://localhost:3001/useshorturl/2')
    })

    it('user should be able to view input fields for title and url to shorten', () => {
      cy
      .get('input:first').should('have.attr', 'placeholder', 'Title...')
      cy
      .get('input:last').should('have.attr', 'placeholder', 'URL to Shorten...')
    })
    //
    // it('user should be able to view page title', () => {
    //
    // })
    //
    // it('user should be able to view page title', () => {
    //
    // })
    //
    // it('user should be able to view page title', () => {
    //
  // })
  })
