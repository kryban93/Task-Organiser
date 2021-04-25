describe('Renders signup website elements properly', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signUp');
  });

  it('Check if user wrote correct email, if not return an error', () => {
    cy.get('[data-testid="signup-form-email-input"]').type('batman');
    cy.get('[data-testid="signup-form-send-btn"]').click();
  });

  it('Check if wrote correct confirm password, if not return an error', () => {
    cy.get('[data-testid="signup-form-email-input"]').type('test@test.com');
    cy.get('[data-testid="signup-form-userName-input"]').type('batman');
    cy.get('[data-testid="signup-form-password-input"]').type('test12');
    cy.get('[data-testid="signup-form-confirm-password-input"]').type('test1');
    cy.get('[data-testid="signup-form-send-btn"]').click();
    cy.get('[data-testid="signup-form-error"]').should('have.html', 'Passwords do not match');
  });

  it('Check if password fulfills length acceptance criteria, if not return an error', () => {
    cy.get('[data-testid="signup-form-email-input"]').type('test@test.com');
    cy.get('[data-testid="signup-form-userName-input"]').type('batman');
    cy.get('[data-testid="signup-form-password-input"]').type('test12');
    cy.get('[data-testid="signup-form-confirm-password-input"]').type('test12');
    cy.get('[data-testid="signup-form-send-btn"]').click();
    cy.get('[data-testid="signup-form-error"]').should('have.html', 'Password is too short');
  });

  it('Check if password fulfills special letter acceptance criteria, if not return an error', () => {
    cy.get('[data-testid="signup-form-email-input"]').type('test@test.com');
    cy.get('[data-testid="signup-form-userName-input"]').type('batman');
    cy.get('[data-testid="signup-form-password-input"]').type('tester1234');
    cy.get('[data-testid="signup-form-confirm-password-input"]').type('tester1234');
    cy.get('[data-testid="signup-form-send-btn"]').click();
    cy.get('[data-testid="signup-form-error"]').should(
      'have.html',
      'Password does not consist of 1 special letter'
    );
  });

  it('Check if password fulfills capital letter acceptance criteria, if not return an error', () => {
    cy.get('[data-testid="signup-form-email-input"]').type('test@test.com');
    cy.get('[data-testid="signup-form-userName-input"]').type('batman');
    cy.get('[data-testid="signup-form-password-input"]').type('tester!1234');
    cy.get('[data-testid="signup-form-confirm-password-input"]').type('tester!1234');
    cy.get('[data-testid="signup-form-send-btn"]').click();
    cy.get('[data-testid="signup-form-error"]').should(
      'have.html',
      'Password does not consist of 1 capital letter'
    );
  });
});
