// Librairies
import axios from 'axios';

export const ADD_PROJECT = 'ADD_PROJECT';

export const addProject = (project) => {
  return (dispatch) => {
    axios
      .post(
        'https://reminder-8b9d2-default-rtdb.europe-west1.firebasedatabase.app/projects.json',
        project,
      )
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
