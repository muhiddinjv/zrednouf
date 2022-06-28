describe("Accomplishments Dashboard",()=>{
    beforeEach(()=>{
        cy.visit("/accomplishments")
    })

    it("should showcase error if info is missing",()=>{
        cy.get(".Accomplishment-input")
        cy.get(".Accomplishment-textarea")
        cy.get("[data-cy='accomplishment-checkbox']")
    })
})

