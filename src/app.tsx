import './styles/app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './core/header/header'
import { Navbar } from './core/navbar'
import { Groups } from './features/group/ui/groups'
import { Expenses } from './features/expense/ui/expenses'
import { Balance } from './features/expense/ui/balance'
import { SignIn } from './features/auth/ui/signin'
import { SignUp } from './features/user/ui/sign-up'
import { NewGroup } from './features/group/ui/new-group'

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/login" component={SignIn} exact />
          <Route path="/registrar" component={SignUp} exact />
          <Route path="/grupos/:path?" exact>
            <Switch>
              <Route path="/grupos/activos" component={Groups} exact />
              <Route path="/grupos/inactivos" exact>
                <section id={'layout-boxed'}>
                  <p>
                    <em>Próximamente</em>
                  </p>
                </section>
              </Route>
              <Route path="/grupos/nuevo" component={NewGroup} exact />
            </Switch>
            <Navbar></Navbar>
          </Route>
          <Route path="/grupo/:id">
            <Switch>
              <Route path="/grupo/:id/gastos" component={Expenses} exact />
              <Route path="/grupo/:id/balance" component={Balance} exact />
            </Switch>
            <Navbar></Navbar>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
