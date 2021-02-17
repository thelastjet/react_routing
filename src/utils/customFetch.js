export const customFetch = async (
  endpoint,
  changeState,
  changeFilteredState
) => {
  try {
    const response = await fetch(
      `https://ghibliapi.herokuapp.com/${endpoint}`,
      {
        mode: "cors",
      }
    );

    if (response.ok) {
      const result = await response.json();
      changeState(result);
      if (changeFilteredState) {
        changeFilteredState(result);
      }
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
