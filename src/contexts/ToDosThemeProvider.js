import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const todosTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#2ebaee",
    },
    secondary: {
      main: "#46529d",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const ToDosThemeProvider = (props) => {
  const { children } = props;
  return <ThemeProvider theme={todosTheme}>{children}</ThemeProvider>;
};
