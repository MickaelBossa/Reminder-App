import { ADD_PROJECT, ADD_NOTE } from '../actions/app';

const initialState = {
  notes: [],
  projects: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.project, ...state.projects],
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.note, ...state.notes],
      };
    default:
      return state;
  }
};
