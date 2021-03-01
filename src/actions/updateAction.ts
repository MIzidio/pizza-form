import { GlobalState } from "little-state-machine";

export const updateAction = (
  state: GlobalState,
  payload: object
): GlobalState => ({
  ...state,
  pizza: {
    ...state.pizza,
    ...payload,
  },
});
