export default defineNuxtPlugin(async (nuxtApp) => {
    // Redirect to home page on 404 error
    if(toRaw(nuxtApp.payload).error?.statusCode){
            await navigateTo('/Home')
    }
  });