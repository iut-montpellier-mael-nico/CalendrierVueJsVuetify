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
    "http://baron-guitard-calendrierapi.herokuapp.com/private/addEvent",
    {
      idEvent: idEvent,
      title: title,
      dateDebut: dateDebut,
      dateFin: dateFin,
      description: description,
      idUser: idUser
    },
    { withCredentials: true }, {
          headers: {
              'Authorization': 'Bearer' + sessionStorage.getItem("jwt"),
              'Content-Type': 'application/x-www-form-urlencoded'
          }
    });
};
export const deleteUnEvent = (idEvent) => {
  return axios.post(
    "http://baron-guitard-calendrierapi.herokuapp.com/private/deleteEvent", {idEvent: idEvent},{ withCredentials: true }, {
          headers: {
              'Authorization': 'Bearer' + sessionStorage.getItem("jwt"),
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      .then(function(response){
          console.log(response);
          return response
      })
      .catch(function (error) {
          console.error(error);
          return error;
      })
};

export const getUnEvent = (idEvent) => {return axios.post(
    "http://baron-guitard-calendrierapi.herokuapp.com/private/monEvent", {idEvent: idEvent},{ withCredentials: true }, {
        headers: {
            'Authorization': 'Bearer' + sessionStorage.getItem("jwt"),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(function(response){
        console.log(response);
        return response
    })
    .catch(function (error) {
        console.error(error);
        return error;
    })};
export const getAllEvents = () => {
    return axios.post("http://baron-guitard-calendrierapi.herokuapp.com/private/mesEvents",{idUser: sessionStorage.getItem("idUser")}, {withCredentials: true}, {
        headers: {
            'Authorization': 'Bearer' + sessionStorage.getItem("jwt"),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
})
        .then(function(response){
            console.log(response);
            return response.data
        })
        .catch(function (error) {
            console.error(error);
            return error;
        })
};

export const createUser = (email, pass) => {
  return axios
    .post(
      "http://baron-guitard-calendrierapi.herokuapp.com/register",
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
      "http://baron-guitard-calendrierapi.herokuapp.com/login",
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
