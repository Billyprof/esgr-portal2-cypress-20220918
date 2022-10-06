@@ -0,0 +1,65 @@
describe('My First Test', function () {
	it('_main', function () {
		for (let i = 0; i < 1; i++) {
			cy.visit('https://freedomawardstaging.csd.disa.mil/'); 
			cy.contains('Nominate Employer').click();
			// cy.get('#StateDropdown').click({force: true});
			// cy.get('#StateDropdown').type('{downarrow}');
			cy.get('#StateDropdown_listbox').contains('Alabama').click({force: true});

			// cy.get('.k-state-hover > .k-input').click();
			// cy.get('.k-state-border-down:nth-child(2)').type('{downarrow}');
			// cy.get('#FirstName').type('Tenki');
			// cy.get('#LastName').type('Gu');
			// cy.get('#NominatorTelephone').type('7665443322');
			// cy.get('#NominatorEmail').type('tenki.gu@dsfederal.com');
			// cy.get('.row:nth-child(4) > .col-md-4:nth-child(1) > .k-widget').type('{downarrow}');
			// cy.get('.row:nth-child(4) > .col-md-4:nth-child(1) > .k-widget').type('{downarrow}');
			// cy.get('.row:nth-child(4) > .col-md-4:nth-child(2) > .k-widget').type('{downarrow}');
			// cy.get('.row:nth-child(4) > .col-md-4:nth-child(2) > .k-widget').type('{downarrow}');
			// cy.get('.row:nth-child(4) > .col-md-4:nth-child(3) > .k-dropdown').type('{downarrow}');
			// cy.get('.row:nth-child(4) > .col-md-4:nth-child(3) > .k-dropdown').type('{downarrow}');
			// cy.get('.row:nth-child(4) > .col-md-4:nth-child(3) > .k-dropdown').type('{downarrow}');
			// cy.get('#CompanyName').click();
			// cy.get('#CompanyName').type('DSF');
			// cy.get('.row:nth-child(2) > .col-md-4:nth-child(2) > .k-widget').type('{downarrow}');
			// cy.get('.row:nth-child(2) > .col-md-4:nth-child(2) > .k-widget').type('{downarrow}');
			// cy.get('#Address').type('{backspace}');
			// cy.get('#Address').type('{backspace}');
			// cy.get('#Address').type('1803 Research Blvd');
			// cy.get('#City').type('Rockv');
			// cy.get('#ZipCode').type('20850');
			// cy.get('#ContactPersonFName').click();
			// cy.get('#ContactPersonFName').type('Fir');
			// cy.get('#ContactPersonLName').type('Las');
			// cy.get('#EmployerPOCPhone').type('7889990000');
			// cy.get('#EmployerPOCEmail').type('tenki.gu.1@dsfederal.com');

			// cy.get('#\36 8-Yes').click();
			// cy.get('#\36 8-Comments').click();
			// cy.get('#\36 8-Comments').type('test');
			// cy.get('#\36 9-No').click();
			// cy.get('#\37 0-Yes').click();
			// cy.get('#\37 0-Comments').click();
			// cy.get('#\37 0-Comments').type('test2');
			// cy.get('#\37 1-No').click();
			// cy.get('#\37 2-Yes').click();
			// cy.get('#\37 2-Comments').click();
			// cy.get('#\37 2-Comments').type('test3');
			// cy.get('#\37 3-No').click();
			// cy.get('#\37 4-Yes').click();
			// cy.get('#\37 4-Comments').click();
			// cy.get('#\37 4-Comments').type('test4');
			// cy.get('.form-group:nth-child(22) .btn-checkbox:nth-child(2)').click();
			// cy.get('#\37 5-No').click();

			// cy.get('#AdditionalInformation').click();
			// cy.get('#AdditionalInformation').type('additional test');
			// cy.get('.k-state-hover > .k-input').click();
			// cy.get('.k-state-hover').click();
			// cy.get('#submitBtn').click();
			//cy.get('.public-nomination').submit();

		}
	})
})