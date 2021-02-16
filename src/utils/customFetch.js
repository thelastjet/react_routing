export const customFetch = (endpoint, changeState) => {
  fetch(`https://ghibliapi.herokuapp.com/${endpoint}`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((result) => changeState(result))
    .catch((error) => console.log(error));
};
