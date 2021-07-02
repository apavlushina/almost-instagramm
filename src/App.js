import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/user'
import useAuthListener from './hooks/user-auth-listener'
import Dashboard from './pages/dashboard'

const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/sign-up'))
const NotFound = lazy(() => import('./pages/not-found'))

export default function App() {
  const { user } = useAuthListener()
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={Signup} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route path={ROUTES.NOT_FOUND} component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}
