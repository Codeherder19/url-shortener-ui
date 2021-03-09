describe('URL Shortener', () => {
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    cy
    .fixture('postDummyData.json')
    .then(post => {
      cy
      .intercept('POST', 'http://localhost:3001/api/v1/urls', {
        statusCode: 201,
        body: post
      })
    })
    cy
    .visit(baseUrl)
  });

  it('user should be able to see a new shortened URL rendered after form submission', () => {
    cy
    .get('input:first').type('Colorado Unemployment')
    cy
    .get('input:last').type('https://cdle.colorado.gov/unemployment')
    cy
    .get('button').click()
    cy
    .get('a:last').should('have.attr', 'href', 'http://localhost:3001/useshorturl/4')
  })


})
