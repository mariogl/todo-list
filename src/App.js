import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ErrorDialog } from "./components/ErrorDialog";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { AuthContextProvider } from "./contexts/AuthContextProvider";
import { ToDosContextProvider } from "./contexts/ToDosContextProvider";
import { ToDosThemeProvider } from "./contexts/ToDosThemeProvider";
import { PageCreateToDo } from "./pages/PageCreateToDo";
import { PageEditToDo } from "./pages/PageEditToDo";
import { PageList } from "./pages/PageList";
import { PageNotFound } from "./pages/PageNotFound";
import { routePaths } from "./router/paths";

const useStyles = makeStyles({
  relativeContainer: {
    position: "relative",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <ToDosThemeProvider>
        <CssBaseline />
        <ToDosContextProvider>
          <AuthContextProvider>
            <Header />
            <Container
              className={classes.relativeContainer}
              maxWidth="sm"
              disableGutters
            >
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
            <Loading />
            <ErrorDialog />
          </AuthContextProvider>
        </ToDosContextProvider>
      </ToDosThemeProvider>
    </Router>
  );
}

export default App;
