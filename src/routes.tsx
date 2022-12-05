import Login from './public/login/login';
//import Settings from './private/settings/settings'
import App from './App';

import { Route, BrowserRouter, Navigate } from 'react-router-dom';

const Routes = () => {

  // const PrivateRoute = ({ children, ...rest }) => {
  //   return (
  //     <Route {...rest} render={() => {

  //       return localStorage.getItem('token') ?
  //         children : <Navigate to="/" />
  //     }}
  //     />
  //   )
  // }

  return (
    <BrowserRouter>
      <Route path="/" element={<App />} />
        
      
      {/* <PrivateRoute exact path="/settings">
        <Settings />
      </PrivateRoute> */}
    </BrowserRouter>
  )
}

export default Routes