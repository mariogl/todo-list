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
  done: {
    textDecoration: "line-through",
  },
});

export const ToDo = (props) => {
  const {
    toDo,
    toDo: { id, description, priority, done },
    openConfirm,
    toggleToDo,
  } = props;
  const classes = useStyles();
  const history = useHistory();
  const goToEditPage = () => history.push(`${routePaths.editToDo}/${id}`);
  const onToggleToDo = () => {
    toggleToDo(toDo);
  };
  const onOpenConfirm = (e) => {
    e.stopPropagation();
    openConfirm(id);
  };
  return (
    <ListItem
      aria-label="ToDo"
      className={classes[`priority${priority}`]}
      component="li"
      button
    >
      <ListItemAvatar>
        <Avatar aria-label="toggle ToDo" onClick={onToggleToDo}>
          <DoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText className={done ? classes.done : ""} onClick={goToEditPage}>
        {description}
      </ListItemText>
      <ListItemAvatar>
        <Avatar aria-label="remove ToDo" onClick={onOpenConfirm}>
          <DeleteIcon />
        </Avatar>
      </ListItemAvatar>
    </ListItem>
  );
};

ToDo.propTypes = {
  toDo: PropTypes.shape(toDoPropsSchema).isRequired,
  openConfirm: PropTypes.func.isRequired,
  toggleToDo: PropTypes.func.isRequired,
};
