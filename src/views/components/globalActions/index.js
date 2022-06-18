// import EventBus, { ACTIONS } from "../../EventBus/index";
import EventBus, { ACTIONS } from "../../../EventBus/index";

export const showSnackbar = (message) => {
  EventBus.$emit(ACTIONS.SNACKBAR, message);
};
