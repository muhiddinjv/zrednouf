describe("habit dashboard",()=>{
    beforeEach(()=>{
        cy.visit('/habits')
    })

    it("should display modal when add button is clicked",()=>{
        // cy.get("#habit-add-btn")
        cy.contains("button","Add").click()
        cy.contains("Add a new habit").should("be.visible")
    })

    it("should display habit card when new habit is added",()=>{
        cy.get("#habit-add-btn").click()
        // cy.get(".modal-content").should("be.visible")
        cy.get("input[class='form-control']").type("drink a big cup of water dude!")
        cy.contains("Save Changes").click()
        cy.contains("drink a big cup of water dude!")
          .should("be.visible")
          .and("have.class","HabitCard__habit-container")
    })
})