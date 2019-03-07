import axios from "axios";

export const addUnEvent = (
  idEvent,
  title,
  dateDebut,
  dateFin,
  description,
  idUser
) => {
  return axios.post(
    "http://localhost:5000/private/addEvent",
    {
      idEvent: idEvent,
      title: title,
      dateDebut: dateDebut,
      dateFin: dateFin,
      description: description,
      idUser: idUser
    },
    { withCredentials: true }
  );
};
export const deleteUnEvent = idEvent => {
  return axios.post(
    "http://localhost:5000/private/deleteEvent",
    {
      idEvent: idEvent
    },
    { withCredentials: true }
  );
};

export const getUnEvent = () => {};
export const getAllEvents = () => {};

export const createUser = (email, pass) => {
  return axios
    .post(
      "http://localhost:5000/register",
      {
        mail: email,
        password: pass
      },
      { withCredentials: true }
    )
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(function(error) {
      console.error(error);
      return error;
    });
};
export const seConnecter = (email, pass) => {
  return axios
    .post(
      "http://localhost:5000/login",
      {
        mail: email,
        password: pass
      },
      { withCredentials: true }
    )
    .then(function(response) {
      console.log(response);
      sessionStorage.setItem("idUser", response.data.idUtilisateur);
      sessionStorage.setItem("jwt", response.data.jwt);
      return response;
    })
    .catch(function(error) {
        alert(error);
      console.error(error);
      return error;
    });
};
