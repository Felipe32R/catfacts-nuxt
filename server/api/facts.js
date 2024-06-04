export default defineEventHandler(async (event) => {
  const { data } = await $fetch("https://meowfacts.herokuapp.com/?count=100");

  return data;
});
