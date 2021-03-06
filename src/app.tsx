import './styles/app.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Header } from './core/header/header'
import { Groups } from './features/group/ui/groups'
import { SignIn } from './features/auth/ui/signin'
import { GroupHeader } from './features/group/ui/group-header'
import { UpdateExpense } from './features/expense/ui/update-expense'
import { SignUp } from './features/user/ui/sign-up'
import { Navbar } from './core/navbar'
import { CreateGroup } from './features/group/ui/create-group'
import { TotalCard } from './features/expense/ui/total-card'
import { Expenses } from './features/expense/ui/expenses'
import { CreateExpense } from './features/expense/ui/create-expense'
import { Balance } from './features/expense/ui/balance'

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={SignIn} exact />
          <Route path="/registrar" component={SignUp} exact />
          <Route path="/ajustes" exact>
            <section id={'layout-boxed'}>
              <p>
                <em>Próximamente</em>
              </p>
            </section>
            <Navbar></Navbar>
          </Route>
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
              <Route path="/grupos/nuevo" component={CreateGroup} exact />
            </Switch>
            <Navbar></Navbar>
          </Route>
          <Route path="/grupo/:id">
            <GroupHeader />
            <TotalCard />
            <Switch>
              <Route path="/grupo/:id/gastos" component={Expenses} exact />
              <Route path="/grupo/:id/nuevo-gasto" component={CreateExpense} exact />
              <Route path="/grupo/:id/gastos/:expenseId" component={UpdateExpense} exact />
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
