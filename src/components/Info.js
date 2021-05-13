import { Box, Typography } from "@material-ui/core";

export const Info = () => {
  const nPendingToDos = 3;
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
