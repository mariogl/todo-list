import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";

const Heading = withStyles({
  root: {
    fontFamily: "Montserrat, sans-serif",
  },
})(Typography);

export const Header = () => {
  return (
    <AppBar color="secondary">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
        >
          <Heading component="h1" variant="h5">
            ToDo List
          </Heading>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
