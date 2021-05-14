import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import { routePaths } from "../router/paths";
import { toDoPropsSchema } from "../schema/todo";

const useStyles = makeStyles({
  priority1: {
    backgroundColor: "red",
  },
  priority2: {
    backgroundColor: "yellow",
  },
  priority3: {
    backgroundColor: "green",
  },
});

export const ToDo = (props) => {
  const {
    toDo: { id, description, priority },
  } = props;
  const classes = useStyles();
  const history = useHistory();
  const goToEditPage = () => history.push(`${routePaths.editToDo}/${id}`);
  return (
    <ListItem className={classes[`priority${priority}`]} component="li" button>
      <ListItemAvatar>
        <Avatar>
          <DoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText onClick={goToEditPage}>{description}</ListItemText>
      <ListItemAvatar>
        <Avatar>
          <DeleteIcon />
        </Avatar>
      </ListItemAvatar>
    </ListItem>
  );
};

ToDo.propTypes = {
  toDo: PropTypes.shape(toDoPropsSchema).isRequired,
};
