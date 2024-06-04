export default defineEventHandler(async (event) => {
  // fetch the data from the api
  const { data } = await $fetch("https://meowfacts.herokuapp.com/?count=100");

  return data;
});
