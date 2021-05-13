import { Box, Typography } from "@material-ui/core";

export const Info = () => {
  const nTareasPendientes = 3;
  return (
    <Box py={2}>
      <Typography variant="body1">
        {nTareasPendientes
          ? `Tienes ${nTareasPendientes} tarea${
              nTareasPendientes !== 1 ? "s" : ""
            } pendiente${nTareasPendientes !== 1 ? "s" : ""}`
          : "No tienes tareas pendientes"}
      </Typography>
    </Box>
  );
};
