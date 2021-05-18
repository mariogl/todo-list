import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router";
import { routePaths } from "../router/paths";

export const AddAction = () => {
  const history = useHistory();
  const goToFormPage = () => {
    history.push(routePaths.createToDo);
  };
  return (
    <>
      <Fab
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
