<script lang="ts">
  import welcome_fallback from '$lib/images/svelte-welcome.png'
  import welcome from '$lib/images/svelte-welcome.webp'
  import type { AxiosResponse } from 'axios'
  import api from '../lib/api'
  import Counter from './Counter.svelte'

  let promise: Promise<AxiosResponse<any, any>>
  function fetchData() {
    promise = api.get('/')
  }

  fetchData()
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>
    <span class="welcome">
      <picture>
        <source srcset={welcome} type="image/webp" />
        <img src={welcome_fallback} alt="Welcome" />
      </picture>
    </span>

    to your new<br />SvelteKit app
  </h1>

  <h2>
    try editing <strong>src/routes/+page.svelte</strong>
  </h2>

  {#await promise}
    <b>Loading...</b>
  {:then { data }}
    {data?.message}
  {:catch err}
    <b>Backend error:</b> {err.message}
  {/await}

  <Counter />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
