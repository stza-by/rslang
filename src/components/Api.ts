export const getCards = async (page: number = 1, group: number = 1) => {
  const response = await fetch(`https://react-rslang-project.herokuapp.com/words?group=${group}&page=${page}`);

  return response.json();
};