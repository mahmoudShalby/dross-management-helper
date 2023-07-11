<script lang="ts">
  import '../app.css'
  import { fade } from 'svelte/transition'

  export let data
</script>

{#key data.url}
  <div in:fade>
    <slot />
  </div>
{/key}
