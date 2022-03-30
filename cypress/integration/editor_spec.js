/// <reference types="Cypress" />

context(
  'New projects should have "Untitled" project name',
  {
    viewportWidth: 1680,
    viewportHeight: 1050,
  },
  () => {
    beforeEach(() => {
      cy.visitPath("editor");
    });

    it("Should have a default name", () => {
      cy.get(".sc-eJwWfJ.hZFFnD").should("have.text", "Untitled Design");
    });

    it("Show a modal to rename the project", () => {
      cy.get(".sc-eJwWfJ.hZFFnD").click();

      cy.get('[data-testid="modal"]').contains("Name Your Project", { matchCase: false });
    });

    it ("Modal should dismiss when cancel button clicked", () => {
    
     cy.get(".sc-eJwWfJ.hZFFnD").click();
     cy.contains('Cancel').click()
     cy.get(".modal").should("not.exist");

    });
   

    it("Modal should dismiss whenever it's clicked outside of", () => {
      cy.get(".sc-eJwWfJ.hZFFnD").click();
      cy.get('.sc-pVTFL').click('bottomRight');
      cy.get(".modal").should("not.exist");
    });
  }
);
