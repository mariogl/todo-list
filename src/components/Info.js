import { Box, Typography } from "@material-ui/core";
import { useToDosRepository } from "../hooks/useToDosRepository";

export const Info = () => {
  const { nPendingToDos } = useToDosRepository();
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
