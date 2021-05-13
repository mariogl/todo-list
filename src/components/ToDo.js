import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router";
import { routePaths } from "../router/paths";

export const ToDo = (props) => {
  const {
    toDo: { id, description },
  } = props;
  const history = useHistory();
  const goToEditPage = () => history.push(`${routePaths.editToDo}/${id}`);
  return (
    <ListItem button>
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
