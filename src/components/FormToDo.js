import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import * as yup from "yup";
import { toDoPropsSchema } from "../schema/todo";
import { routePaths } from "../router/paths";

const validationSchema = yup.object({
  name: yup.string().required("Don't forget to type the task name"),
  priority: yup.number().min(1).max(3),
});

export const FormToDo = (props) => {
  const { toDo } = props;
  const history = useHistory();

  const submitToDo = ({ name, priority }) => {
    if (toDo) {
      console.log("Modify");
    } else {
      console.log("Create");
    }
    history.push(routePaths.list);
  };

  const initialValues = {
    name: toDo ? toDo.name : "",
    priority: toDo ? toDo.priority : 2,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitToDo,
  });

  return (
    <>
      <Box px={2} py={4}>
        <Typography component="h2" variant="h5" align="center">
          {toDo ? "Modify ToDo" : "New ToDo"}
        </Typography>
      </Box>
      <Box px={2} py={4}>
        <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <Box mb={4}>
            <TextField
              id="name"
              label="What do you need to do?"
              value={formik.values.name}
              fullWidth
              required
              onChange={formik.handleChange}
              error={formik.touched.name && !!formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>
          <Box mb={4}>
            <TextField
              select
              id="priority"
              name="priority"
              label="Priority:"
              onChange={formik.handleChange}
              value={formik.values.priority}
              error={!!formik.errors.priority}
            >
              <MenuItem value={1}>High</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>Low</MenuItem>
            </TextField>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              type="submit"
            >
              {toDo ? "Modify" : "Create"}
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

FormToDo.propTypes = {
  tarea: PropTypes.shape(toDoPropsSchema),
};
