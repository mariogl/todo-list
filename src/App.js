import { Container, CssBaseline } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Header } from "./components/Header";
import { ToDosContextProvider } from "./contexts/ToDosContextProvider";
import { ToDosThemeProvider } from "./contexts/ToDosThemeProvider";
import { PageCreateToDo } from "./pages/PageCreateToDo";
import { PageEditToDo } from "./pages/PageEditToDo";
import { PageList } from "./pages/PageList";
import { PageNotFound } from "./pages/PageNotFound";
import { routePaths } from "./router/paths";

function App() {
  return (
    <Router>
      <ToDosThemeProvider>
        <CssBaseline />
        <ToDosContextProvider>
          <Header />
          <Container maxWidth="sm" disableGutters>
            <Switch>
              <Route path={routePaths.list} exact>
                <PageList />
              </Route>
              <Route path={routePaths.createToDo} exact>
                <PageCreateToDo />
              </Route>
              <Route path={`${routePaths.editToDo}/:id`} exact>
                <PageEditToDo />
              </Route>
              <Route path="/" exact>
                <Redirect to={routePaths.list} />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </Container>
        </ToDosContextProvider>
      </ToDosThemeProvider>
    </Router>
  );
}

export default App;
