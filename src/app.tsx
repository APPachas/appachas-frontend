import './styles/app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './core/header/header'
import { Navbar } from './core/navbar'
import { Groups } from './features/group/ui/groups'
import { Expenses } from './features/expense/ui/expenses'
import { Balance } from './features/expense/ui/balance'
import { SignIn } from './features/auth/ui/signin'
import { SignUp } from './features/user/ui/sign-up'
import { CreateGroup } from './features/group/ui/create-group'
import { CreateExpense } from './features/expense/ui/create-expense'
import { GroupHeader } from './features/group/ui/group-header'
import { TotalCard } from './features/expense/ui/total-card'
import { UpdateExpense } from './features/expense/ui/update-expense'

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
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
