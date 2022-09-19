describe('My First Test', function () {
	it('_main', function () {
		for (let i = 0; i < 20; i++) {
			cy.fixture('test_data').as('user_data')
			cy.get('@user_data').each((user) => {
				cy.visit('https://portal.esgr.com/'); 
				// dev: https://portal.esgr.com/; staging: https://esgrstage2.csd.disa.mil/
				cy.contains('By Clicking Here You Agree To The Terms Above').click();

				// Get an input, type into it and verify that the value has been updated
			    cy.get('[id=Username]')
			      .type(user.username)
			      .should('have.value', user.username);
			    cy.get('[id=Password]')
			      .type(user.password);  // dev: Esgr12345!; staging: Esgr1803!!!

			    // for manually pass reCaptcha
			    //cy.wait(30000);

			    cy.contains('Continue').click();

			    // Give this element 10 seconds to appear
			    //cy.contains('Push Notification').click();

				cy.contains('Inquiry and Case Management System', { timeout: 20000 }).click();
				//cy.wait(6000);

				/*
				// on QuickViewCases page
				cy.url().should('contains', '/icms/QuickViewCases');
				cy.get('.nav-item:nth-child(1) > #nominations').click();
				cy.get('.show > .dropdown-item:nth-child(2)').click();
				cy.url().should('contains', '/icms/AddCase');
				//cy.get('#FirstName').click();
				cy.get('#FirstName').type('Tenki');
				//cy.get('#LastName').click();
				cy.get('#LastName').type('Gu');
				//cy.get('#City').click();
				cy.get('#City').type('City1');
				cy.get('#StateId').type('MD');
				cy.get('[aria-owns="StateId_listbox"]').click();
				//await element(by.xpath("//div[@id='tabstrip-1']/div/div[2]/div[2]/span/span/span")).click();
				//await element(by.xpath("//ul[@id='StateId_listbox']/li[18]")).click();
				//cy.get('#Zip').click();
				cy.get('#Zip').type('20850');
				//cy.get('#Email').click();
				cy.get('#Email').type('tenki.gu@dsfederal.com');
				//cy.get('#PrimaryPhone').click();
				cy.get('#PrimaryPhone').type('5678901111');
				//cy.get('#BranchId').click();
				cy.get('#BranchId').select('USA');
				//cy.get('#ComponentId').click();
				cy.get('#ComponentId').select('USA');
				//cy.get('#RankId').click();
				cy.get('#RankId').select('O-02');
				//cy.get('#UnitName').click();
				cy.get('#UnitName').type('unit1');
				cy.contains('Employer Information').click();
				//cy.get('#EmployerName').click();
				cy.get('#EmployerName').type('ename1');
				cy.get('#EmployerTypeId').select('Private Employer');
				//cy.get('#EmployerCity').click();
				cy.get('#EmployerCity').type('city2');
				cy.get('#EmployerStateId').select('MD');
				//cy.get('#PriPocFirstName').click();
				cy.get('#PriPocFirstName').type('first1');
				//cy.get('#PriPocLastName').click();
				cy.get('#PriPocLastName').type('last1');
				//cy.get('#PriPocFirstName').click();
				cy.get('#PriPocFirstName').type('first');
				//cy.get('#PriPocLastName').click();
				cy.get('#PriPocLastName').type('last');
				//cy.get('#PriPocPriPhone').click();
				cy.get('#PriPocPriPhone').type('5432211789');
				// Case Information
				cy.contains('Case Information').click();
				cy.get('#Terminated_False').click();
				cy.get('#PrivacyActDisclosed_True').click();
				cy.get('#InActiveDuty_True').click();
				cy.get('#ProblemCodeId').select('Other');
				var date_0 = new Date()
				var date_str = date_0.toString();
				cy.get('#CaseSummary').type('automation testing' + date_str);
				cy.contains('Case Management').click();
				cy.get('#btnSave').click();
				cy.get('.case').submit();
				cy.url().should('contains', '/icms/ManageCase');
				*/
				cy.get('.nav-item:nth-child(1) > #nominations').click();
				cy.get('.show > .dropdown-item:nth-child(1)').click();
				cy.url().should('contains', '/icms/QuickViewCases');
				cy.get('.nav-item:nth-child(1) > #nominations').click();
				cy.get('.show > .dropdown-item:nth-child(2)').click();
				cy.url().should('contains', '/icms/AddCase');
				cy.get('.nav-item:nth-child(2) > #nominations').click();
				cy.get('.show > .dropdown-item:nth-child(1)').click();
				cy.url().should('contains', '/icms/QuickViewInquiries');
				cy.get('.nav-item:nth-child(2) > #nominations').click();
				cy.get('.show > .dropdown-item:nth-child(2)').click();
				cy.url().should('contains', '/icms/Inquiry');
				cy.get('#reports').click();
				cy.get('.show > .dropdown-item:nth-child(1)').click();
				cy.url().should('contains', '/icms/Reports/CaseAndInquirySummaryReport');
				cy.get('#reports').click();
				cy.get('.show > .dropdown-item:nth-child(2)').click();
				cy.url().should('contains', '/icms/Reports/ComponentReports');

				//
				cy.contains('Log Off', { timeout: 5000 }).click();

				cy.wait(8000);

			})
		}
	})
})