import {
  BrowserRouter as Router,
  Route,
  Routes as RootRoutes,
} from 'react-router-dom';

import {
  publicRoutes,
} from './constrants';

function Routes() {
  return (
    <Router>
      <RootRoutes>
        <Route>
          <>
            {publicRoutes.map((route, index) => (
              <Route
                key={ index }
                path={ route.path }
                element={ <route.component /> }
              />
            ))}
          </>
        </Route>
      </RootRoutes>
    </Router>
  );
}
export default Routes;
