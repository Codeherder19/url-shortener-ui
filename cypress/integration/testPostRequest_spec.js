describe('URL Shortener', () => {
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
      cy
      .fixture('postDummyData.json')
      .then(post => {
        cy
        .intercept('POST', 'http://localhost:3001/api/v1/urls', {
          statuseCode: 201,
          body: post
        })
      })
      cy
      .visit(baseUrl)
  });
})
