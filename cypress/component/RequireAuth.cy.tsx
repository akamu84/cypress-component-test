import {RequireAuth} from "../../src/components/RequireAuth";
import * as router from "react-router-dom";

describe('RequireAuth.cy.tsx', () => {
  it('playground', () => {
    console.log('lib', router);
    const navigate = cy.stub().as('navigate').returns(undefined);
    const stub = cy.stub(router, 'useNavigate').as('useNavigate').returns(navigate);
    console.log('stub', stub.wrappedMethod);
    cy.mount(<RequireAuth>
      <p>test</p>
    </RequireAuth>)
    cy.get('@useNavigate').should('be.called');
  })
})