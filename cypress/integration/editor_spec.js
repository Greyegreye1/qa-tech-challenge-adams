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

      cy.get("h2").should("contain.text", "Name Your Project");
    });

    it.skip("Modal should dismiss when cancel button clicked", () => {});

    it.skip("Modal should dismiss whenever it's clicked outside of", () => {});
  }
);
