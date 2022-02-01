// Librairies
import axios from '../../axios-instance';

export const ADD_PROJECT = 'ADD_PROJECT';
export const ADD_NOTE = 'ADD_NOTE';
export const GET_NOTES = 'GET_NOTES';
export const GET_PROJECTS = 'GET_PROJECTS';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const START_GET_NOTES = 'START_GET_NOTES';
export const END_GET_NOTES = 'END_GET_NOTES';

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

export const getNotes = () => {
  return (dispatch) => {
    dispatch({ type: START_GET_NOTES });
    axios
      .get('/notes.json')
      .then((response) => {
        const fetchedNotes = [];
        for (let key in response.data) {
          fetchedNotes.push({
            id: key,
            content: response.data[key].content,
            creationDate: response.data[key].creationDate,
            projectId: response.data[key].projectId,
          });
        }
        dispatch({ type: GET_NOTES, notes: fetchedNotes });
        dispatch({ type: END_GET_NOTES });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: END_GET_NOTES });
      });
  };
};

export const getProjects = () => {
  return (dispatch) => {
    axios
      .get('/projects.json')
      .then((response) => {
        const fetchedProjects = [];
        for (let key in response.data) {
          fetchedProjects.push({
            id: key,
            name: response.data[key].name,
          });
        }
        dispatch({ type: GET_PROJECTS, projects: fetchedProjects });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteNote = (noteId) => {
  return (dispatch) => {
    axios.delete(`/notes/${noteId}.json`).then((response) => {
      dispatch({ type: DELETE_NOTE, noteId: noteId });
    });
  };
};

export const deleteProject = (projectId) => {
  return (dispatch) => {
    axios.delete(`/projects/${projectId}.json`).then((response) => {
      dispatch({ type: DELETE_PROJECT, projectId: projectId });
    });
  };
};
