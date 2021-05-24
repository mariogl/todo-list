import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router";
import { routePaths } from "../router/paths";

const useStyles = makeStyles({
  floatingButton: {
    position: "absolute",
    left: "50%",
    top: -10,
    color: "#fff",
  },
});

export const AddAction = () => {
  const history = useHistory();
  const goToFormPage = () => {
    history.push(routePaths.createToDo);
  };
  const classes = useStyles();
  return (
    <>
      <Fab
        className={classes.floatingButton}
        aria-label="create ToDo"
        size="medium"
        color="primary"
        onClick={goToFormPage}
      >
        <AddIcon fontSize="large" />
      </Fab>
    </>
  );
};
