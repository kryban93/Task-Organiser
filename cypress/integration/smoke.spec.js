describe('Renders website elements properly', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Renders Nav properly', () => {
    cy.get('[data-testid="nav"]');
  });

  it('Renders Nav home button properly', () => {
    cy.get('[data-testid="nav-home-btn"]');
  });

  it('Renders Nav tasks button properly', () => {
    cy.get('[data-testid="nav-tasks-btn"]');
  });
  it('Renders Nav notes button properly', () => {
    cy.get('[data-testid="nav-notes-btn"]');
  });
  it('Renders Nav settings button properly', () => {
    cy.get('[data-testid="nav-settings-btn"]');
  });
});
