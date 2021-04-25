describe('Renders website elements properly', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Renders Nav properly', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="login-form-email-input"]').type('admin@admin.pl');
    cy.get('[data-testid="login-form-password-input"]').type('admin123');
    cy.get('[data-testid="login-form-send-btn"]').click();
    cy.visit('http://localhost:3000/tasks');
    cy.get('[data-testid="nav"]');
  });
});
