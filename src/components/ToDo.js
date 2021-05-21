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

const opacity = 0.8;
const useStyles = makeStyles({
  colorPriority1: {
    color: `rgba(255, 0, 0, 1)`,
  },
  colorPriority2: {
    color: `rgba(255, 165, 0, 1)`,
  },
  colorPriority3: {
    color: `rgba(0, 128, 0, 1)`,
  },
  bgColorPriority1: {
    backgroundColor: `rgba(255, 0, 0, ${opacity})`,
  },
  bgColorPriority2: {
    backgroundColor: `rgba(255, 165, 0, ${opacity})`,
  },
  bgColorPriority3: {
    backgroundColor: `rgba(0, 128, 0, ${opacity})`,
  },
  done: {
    textDecoration: "line-through",
  },
});

export const ToDo = (props) => {
  const {
    toDo: { id, description, priority, done },
    openConfirm,
    toggleToDo,
  } = props;
  const classes = useStyles();
  const history = useHistory();
  const goToEditPage = () => history.push(`${routePaths.editToDo}/${id}`);
  const onToggleToDo = () => {
    toggleToDo(id);
  };
  const onOpenConfirm = (e) => {
    e.stopPropagation();
    openConfirm(id);
  };
  return (
    <ListItem
      aria-label="ToDo"
      className={classes[`colorPriority${priority}`]}
      component="li"
      button
    >
      <ListItemAvatar>
        <Avatar
          className={classes[`bgColorPriority${priority}`]}
          aria-label="toggle ToDo"
          onClick={onToggleToDo}
        >
          <DoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText className={done ? classes.done : ""} onClick={goToEditPage}>
        {description}
      </ListItemText>
      <ListItemAvatar>
        <Avatar
          className={classes[`bgColorPriority${priority}`]}
          aria-label="remove ToDo"
          onClick={onOpenConfirm}
        >
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
