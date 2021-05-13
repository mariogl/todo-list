import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";

export const ToDo = (props) => {
  const {
    toDo: { description },
  } = props;
  return (
    <ListItem button disableGutters>
      <ListItemAvatar>
        <Avatar>
          <DoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText>{description}</ListItemText>
      <ListItemAvatar>
        <Avatar>
          <DeleteIcon />
        </Avatar>
      </ListItemAvatar>
    </ListItem>
  );
};
