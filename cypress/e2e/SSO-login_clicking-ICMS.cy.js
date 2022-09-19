describe('My First Test', function () {
	it('_main', function () {
		for (let i = 0; i < 20; i++) {
			cy.fixture('test_data_stg').as('user_data')
			cy.get('@user_data').each((user) => {
				cy.visit('https://esgrstage2.csd.disa.mil/')  // dev: https://portal.esgr.com/; staging: https://esgrstage2.csd.disa.mil/
				cy.contains('By Clicking Here You Agree To The Terms Above').click()

				// Get an input, type into it and verify that the value has been updated
			    cy.get('[id=Username]')
			      .type(user.username)
			      .should('have.value', user.username)
			    cy.get('[id=Password]')
			      .type(user.password)  // dev: Esgr12345!; staging: Esgr1803!!!

			    // for manually pass reCaptcha
			    //cy.wait(30000)

			    cy.contains('Continue').click()

			    // Give this element 10 seconds to appear
			    //cy.contains('Push Notification').click()

				cy.contains('Inquiry and Case Management System', { timeout: 20000 }).click()
				cy.wait(6000)
				cy.contains('Log Off', { timeout: 5000 }).click()

				cy.wait(8000)

			})
		}
	})
})