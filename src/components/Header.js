import {
  AppBar,
  Box,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useMemo } from "react";
import { useHistory, useLocation } from "react-router";
import { routePaths } from "../router/paths";

const useStyles = makeStyles((theme) => ({
  appTitle: {
    fontFamily: "Montserrat, sans-serif",
  },
  buttonContrast: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  header: {
    zIndex: 0,
  },
}));

export const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const isListPage = useMemo(
    () => location.pathname === routePaths.list,
    [location]
  );
  const goToListPage = () => {
    history.push(routePaths.list);
  };
  return (
    <AppBar color="secondary" position="sticky" className={classes.header}>
      <Toolbar disableGutters>
        <Container maxWidth="sm">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width={1}
          >
            <Typography
              className={classes.appTitle}
              component="h1"
              variant="h5"
            >
              ToDo List
            </Typography>
            {!isListPage && (
              <IconButton
                aria-label="back to list"
                className={classes.buttonContrast}
                onClick={goToListPage}
              >
                <KeyboardBackspaceIcon htmlColor="#fff" />
              </IconButton>
            )}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
