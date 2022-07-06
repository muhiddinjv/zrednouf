const { waitFor } = require("@testing-library/react")

describe("Accomplishments Dashboard",()=>{
    beforeEach(()=>{
        cy.visit("/accomplishments")
    })

    it("should showcase error if info is missing",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("My basketball accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made the hoop 10x in a row, dude!")
        cy.contains("Submit Accomplishment").click();
        cy.contains("Complete the items above to continue").should("be.visible")
    })

    it("should display validation component if all info is input",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("My basketball accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("I made the hoop 10x in a row, dude!")
        cy.get("[type='checkbox']").click();
        cy.contains("Submit Accomplishment").click();
        cy.get(".Accomplishment-spinner-container").should("be.visible")
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
        

    })
})

