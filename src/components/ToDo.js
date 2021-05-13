import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

export const ToDo = (props) => {
  const {
    toDo: { description },
  } = props;
  return (
    <ListItem disableGutters>
      <ListItemAvatar>
        <Avatar>
          <DoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText>{description}</ListItemText>
    </ListItem>
  );
};
