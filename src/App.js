import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Header } from "./components/Header";
import { PageCreateToDo } from "./pages/PageCreateToDo";
import { PageEditToDo } from "./pages/PageEditToDo";
import { PageList } from "./pages/PageList";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/list" exact>
          <PageList />
        </Route>
        <Route path="/new-todo" exact>
          <PageCreateToDo />
        </Route>
        <Route path="/edit-todo/:id" exact>
          <PageEditToDo />
        </Route>
        <Route path="/" exact>
          <Redirect to="/list" />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
