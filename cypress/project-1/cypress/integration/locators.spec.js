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
        cy.get("#btn-with-id")

        // get all elements by attribute
        cy.get("[type='submit']")

        // get all elements by tag name & class
        cy.get(" button.Elements-btn")

        // get all elements by tag name & class & id
        cy.get("button.Elements-btn#btn-with-id")

        // get all elements by tag name & class & type
        cy.get("button.Elements-btn[type='submit']")

        // BEST way to GET an element
        // Get all elements by specific data test id
        cy.get("[data-cy='btn-id-1']")
        cy.getByTestId("btn-id-1") //short n sweet
    })

    it("locating elements with contains",()=>{
        // get one element by text
        cy.contains('Unique Text')

        // get the first one of duplicates
        cy.contains('Not Unique Text') 

        // with Selector
        cy.contains("[type='submit']","Not Unique Text")
        cy.contains("form","Not Unique Text")
        
        // this does the same as above code
        cy.get("[type='submit']").contains("Not Unique Text")
    })

    it("locating elements with Find",()=>{
        cy.get("#form-1").find(".btn-1")
        cy.get("#form-1").find(".btn-2")
    })
 })