import PropTypes from "prop-types";

export const toDoPropsSchema = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.oneOf([1, 2, 3]).isRequired,
  done: PropTypes.bool.isRequired,
};
