{/* <reference type="cypress"/> */}

describe('Locators', () => { 
    beforeEach(()=>{
         cy.visit("/elements")
    })

    it("locating elements with GET command",()=>{

        // get all elements by tag name
        cy.get(" button")
        cy.get("h3")
        cy.get("a")

        // get all elements by className
        cy.get(".btn-with-class")
        cy.get(".SideNav")
        cy.get(".Elements")

        // get all elements with specific classes
        cy.get("[class='Elements-btn btn-with-class']")
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        // get all elements by id
        cy.get("[id='btn-with-id']")
    })
 })