import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useContext } from "react";
import { ToDosContext } from "../contexts/ToDosContext";

export const ErrorDialog = () => {
  const { error, setError } = useContext(ToDosContext);
  const onConfirm = () => {
    setError(false);
  };

  return (
    <Dialog open={error}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <DialogContentText>Ooops, something went wrong...</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onConfirm}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
