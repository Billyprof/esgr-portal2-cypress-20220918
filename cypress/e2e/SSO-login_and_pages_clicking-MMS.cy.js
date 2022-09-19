describe('My First Test', function () {
	it('_main', function () {
		for (let i = 0; i < 1; i++) {
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

				cy.contains('Member Management System', { timeout: 20000 }).click();
				//cy.wait(6000);
 	 	
				// MMS landing page
				// cy.contains('Member Portal').click();
				// cy.url().should('contains', '/mms/Dashboard');
				// cy.contains('My Profile').click();
				// cy.url().should('contains', '/mms/Profile');
				// // cy.get("//div[@id='content']/div/div/div/section/div[2]/button").click();
				// cy.get('[onclick="EditContactDialog()"]').click();
				// cy.get('#Mi').type('d');
				// cy.get('#DateJoinEsgr').clear().type('11/3/2018');
				// cy.get('#HomeAddress1').click();
				// cy.get('#HomeAddress1').clear().type('1803 Reasearch 1');
				// cy.get('#HomeCity').click();
				// cy.get('#btnSave').click();
				// // cy.get('#editcontactform').submit();
				// cy.get('.my-5 > :nth-child(2) > .btn').click();
				// cy.get('#FirstName').click();
				// cy.get('#FirstName').clear().type('Firs');
				// cy.get('#LastName').clear().type('Last');
				// cy.get('#RelationShip').clear().type('Rela');
				// cy.get('#Phone').clear().type('7776665555');
				// cy.get('#saveBtn').click();

				// cy.get('#gridMentoringQualifications > .k-grid-toolbar > .k-button').click();
				// cy.get('#MentoringQualificationPositionId_listbox').contains('Chair').click({force: true});
				// cy.get('.k-primary').click();
				// cy.get('#ESGRExperience .k-grid-edit > .k-icon').first().click();
				// cy.get('#End').type('11/11/2025');
				// cy.get('.k-primary').click();

				// cy.get('.section-logo > .nav-link').click();

				// My Training
				cy.get('.training a').click();
				cy.url().should('contains', '/mms/Training');
				// cy.get('.k-grid-add').click();


				cy.get('.logo').click();
				cy.url().should('contains', '/mms/Dashboard');
				cy.get('.mentor h3 > a').click();
				cy.url().should('contains', '/mms/Profile');
				/*
				cy.get('.item-title > #editBtn').click();
				cy.get('#cancelBtn').click();
				*/
				cy.get('#activity').click();
				// cy.get('.show > .dropdown-item:nth-child(2)').click();
				cy.contains("Training").click();
				cy.url().should('contains', '/mms/Trainings');
				cy.get('#activity').click();
				cy.get('.show > .dropdown-item:nth-child(3)').click();
				cy.url().should('contains', '/mms/Awards');
				cy.get('#activity').click();
				cy.get('.show > .dropdown-item:nth-child(4)').click();
				cy.url().should('contains', '/mms/VolunteerHours');
				cy.get('.nav-item:nth-child(2) > .nav-link').click();
				cy.url().should('contains', '/mms/DocumentLibrary');
				cy.get('.nav-item:nth-child(3) > .nav-link').click();
				cy.url().should('contains', '/mms/MemberSearch');
				cy.get('#reports').click();
				cy.get('.show > .dropdown-item:nth-child(1)').click();
				cy.url().should('contains', '/mms/Reports/Award');
				cy.get('#reports').click();
				cy.get('.show > .dropdown-item:nth-child(2)').click();
				cy.url().should('contains', '/mms/Reports/ChairTenure');
				/*
				cy.get('#reports').click();
				cy.get('.dropdown-item:nth-child(10)').click();
				cy.url().should('contains', '/mms/Reports/Training');
				cy.get('#reports').click();
				cy.get('.dropdown-item:nth-child(14)').click();
				cy.url().should('contains', '/mms/Reports/VolunteerId');
				*/
				cy.get('.nav-item:nth-child(6) > .nav-link').click();
				cy.url().should('contains', '/mms/SystemManagementRoles');
				cy.get('#adminportal').click();
				cy.get('.show > .dropdown-item:nth-child(1)').click();
				cy.url().should('contains', '/mms/NationalAnnouncements');
				cy.get('#adminportal').click();
				cy.get('.show > .dropdown-item:nth-child(4)').click();
				cy.url().should('contains', '/mms/AddBatchTrainingCourses');
				cy.get('.logo').click();
				cy.url().should('contains', '/mms/Dashboard');


				//
				cy.contains('Log Off', { timeout: 5000 }).click();

				cy.wait(8000);

			})
		}
	})
})