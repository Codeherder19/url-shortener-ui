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

    it('when a user fills out the form, the information is reflected in the input fields', () => {
      cy
      .get('input:first').type('Hero Wars')
      .should('have.value', 'Hero Wars')
      cy
      .get('input:last').type('https://apps.facebook.com/mobaheroes/?nx_source=group_posting-.pt-gift.gt-sc.cq-4.-&gift_id=3621be529936d62ac8e3b6c10465695b&__cft__[0]=AZUbyLRZyByqHMYT9SpZAfazfmcFwr9Nh19kgltY4e2sXP_feqxBjZZaC4UcEFLQ0Ql-VXNOKZg7ZtEEyAXYr0jb3u_LoArfNU154MsYQayZaxexoCzEOXjee75UqS0QR3YNjDuqFzynVLh0FzhyHQOT6WbgjafR8M5VJZp9hFeDtPRZwfRFNFwdyWtTT1ZoT1U&__tn__=H-R')
      .should('have.value', 'https://apps.facebook.com/mobaheroes/?nx_source=group_posting-.pt-gift.gt-sc.cq-4.-&gift_id=3621be529936d62ac8e3b6c10465695b&__cft__[0]=AZUbyLRZyByqHMYT9SpZAfazfmcFwr9Nh19kgltY4e2sXP_feqxBjZZaC4UcEFLQ0Ql-VXNOKZg7ZtEEyAXYr0jb3u_LoArfNU154MsYQayZaxexoCzEOXjee75UqS0QR3YNjDuqFzynVLh0FzhyHQOT6WbgjafR8M5VJZp9hFeDtPRZwfRFNFwdyWtTT1ZoT1U&__tn__=H-R')
    })
  })
