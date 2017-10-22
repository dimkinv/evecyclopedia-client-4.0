describe('main view', ()=>{
    it('should open the main view successfully', ()=>{
        cy.visit('http://localhost:4200');
        cy.get('tree-node').first().should('have.attr', 'ng-reflect-title', 'Assault Frigate') // .find('div').first().contains('Asault Frigate');
    });
});
