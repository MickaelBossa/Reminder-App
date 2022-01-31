// Librairies
import axios from '../../axios-instance';

export const ADD_PROJECT = 'ADD_PROJECT';
export const ADD_NOTE = 'ADD_NOTE';

export const addProject = (project) => {
  return (dispatch) => {
    axios
      .post('/projects.json', project)
      .then((response) => {
        const newProject = {
          id: response.data.name,
          name: project.name,
        };
        dispatch({ type: ADD_PROJECT, project: newProject });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addNote = (note) => {
  return (dispatch) => {
    axios
      .post('/notes.json', note)
      .then((response) => {
        const newNote = {
          id: response.data.name,
          content: note.content,
          creationDate: note.creationDate,
          projectId: note.projectId,
        };
        dispatch({ type: ADD_NOTE, note: newNote });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
