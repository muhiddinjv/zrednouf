describe("habit dashboard",()=>{
    beforeEach(()=>{
        cy.visit('/habits')
    })

    it("should display modal when add button is clicked",()=>{
        // cy.get("#habit-add-btn")
        cy.contains("button","Add").click()
        cy.contains("Add a new habit").should("be.visible")
    })
})