import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import { useToDosRepository } from "../hooks/useToDosRepository";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
}));

export const Loading = () => {
  const { loading } = useToDosRepository();
  const classes = useStyles();
  return (
    <Backdrop
      open={loading}
      className={classes.backdrop}
      transitionDuration={200}
    >
      <CircularProgress />
    </Backdrop>
  );
};
