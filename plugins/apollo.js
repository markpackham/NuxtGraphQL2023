// taken from https://apollo.nuxtjs.org/recipes/authentication

export default defineNuxtPlugin((nuxtApp) => {
  const { githubToken } = useRuntimeConfig();
  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    token.value = githubToken;
  });
});
