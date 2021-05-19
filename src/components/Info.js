import { Box, Typography } from "@material-ui/core";
import { useContext } from "react";
import { ToDosContext } from "../contexts/ToDosContext";

export const Info = () => {
  const {
    getToDos: { nPendingToDos },
  } = useContext(ToDosContext);
  return (
    <Box p={2}>
      <Typography variant="body1">
        {nPendingToDos
          ? `You have ${nPendingToDos} pending ToDo${
              nPendingToDos !== 1 ? "s" : ""
            }`
          : "You don't have pending ToDos!"}
      </Typography>
    </Box>
  );
};
