describe('Renders website elements properly', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('Check if user wrote correct email, if not return an error', () => {
    cy.get('[data-testid="login-form-email-input"]').type('batman');
    cy.get('[data-testid="login-form-send-btn"]').click();
  });

  it('Check if wrote correct confirm password, if not return an error', () => {
    cy.get('[data-testid="login-form-email-input"]').type('test@test.com');
    cy.get('[data-testid="login-form-password-input"]').type('test123');
    cy.get('[data-testid="login-form-send-btn"]').click();
    cy.get('[data-testid="login-form-error"]').should('have.html', 'Failed to log in');
  });
});
