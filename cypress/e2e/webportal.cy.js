describe("template spec ", () => {
  it("Etax login", () => {
    // cy.visit("https://example.cypress.io");
    cy.visit("/");
    cy.contains("เข้าสู่ระบบ").click();

    // username
    cy.get(`#input-19`).type("toonjirawat");
    // password
    cy.get(`input[type="password"]`).type("n12345678", { force: true });

    // tax id
    cy.get(`#input-24`).type("0105551019496");

    // check box
    cy.get(`[type="checkbox"]`).check({ force: true });

    cy.get(`[type="button"]`).contains("เข้าสู่ระบบ").click();
  });
});
