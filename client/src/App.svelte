<script lang="ts">
  import Router from 'svelte-spa-router'
  import Home from './lib/Home.svelte'
  import Chat from './lib/Chat.svelte';
  import notFound from './lib/404.svelte'

  const routes = {
    "/":Home,
    "/chat":Chat,

    "*": notFound
  }

</script>

<main>
  
  <Router {routes} />
   
</main>

<style>
  
</style>