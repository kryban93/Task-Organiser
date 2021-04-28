describe('Renders tasks form elements properly', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="login-form-email-input"]').type('admin@admin.pl');
    cy.get('[data-testid="login-form-password-input"]').type('admin123');
    cy.get('[data-testid="login-form-send-btn"]').click();
    cy.get('[data-testid="nav-tasks-btn"]').click();
  });

  it('Check if form is rendered properly', () => {
    cy.get('[data-testid="tasks-view-open-modal-button"]').click();
    cy.get('[data-testid="tasks-form-title-input"]');
  });

  it('Check if tags div in form are rendered properly', () => {
    cy.get('[data-testid="tasks-view-open-modal-button"]').click();
    cy.get('[data-testid="tasks-form-title-input"]');
    cy.get('[data-testid="tasks-form-tags-label"]').click();
    cy.get('[data-testid="tasks-form-tags-wrapper"]').should('to.exist');
  });

  it('Check if category div in form are rendered properly', () => {
    cy.get('[data-testid="tasks-view-open-modal-button"]').click();
    cy.get('[data-testid="tasks-form-title-input"]');
    cy.get('[data-testid="tasks-form-category-label"]').click();
    cy.get('[data-testid="tasks-form-category-wrapper"]').should('to.exist');
  });

  it('Check if additional text div in form are rendered properly', () => {
    cy.get('[data-testid="tasks-view-open-modal-button"]').click();
    cy.get('[data-testid="tasks-form-title-input"]');
    cy.get('[data-testid="tasks-form-additional-text-label"]').click();
    cy.get('[data-testid="tasks-form-additional-text-wrapper"]').should('to.exist');
  });
});
