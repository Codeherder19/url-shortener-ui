// Write Cypress tests for the following user flows (don't forget to stub your network requests):
//
// When a user visits the page, they can view the page title and the existing shortened URLs
// When a user visits the page, they can view the Form with the proper inputs
// When a user fills out the form, the information is reflected in the input fields

describe('URL Shortener', () => {
const baseUrl = 'http://localhost:3000';

it('should be able to fetch a random curated taco', () => {
    cy
    .intercept('GET', 'http://localhost:3001/api/v1/urls', {fixture: 'curatedData.json'})
    cy
    .visit(baseUrl);
})
})
