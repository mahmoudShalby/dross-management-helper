<script lang="ts">
  import { post } from '$lib/utils/api'

  let formData: { username: string, password: string }

  const validateForm = async () => {
    const res = post('auth', formData)
  }
</script>

<svelte:window on:input={validateForm} />

<div class="container w-[370px]">
  <h1 class="text-4xl">Login</h1>
  <!-- <p class=""> -->
  <span
    id="message"
    class="hidden mt-[-2px] mb-[-7px] text-red-500 font-bold"
  /><br />
  <!-- <span id="passwordLengthErrorMessage" class="hidden mt-[-2px] mb-[-7px] text-red-500 font-bold">Password's length should be 8 or higher!</span> -->
  <!-- </p> -->
  <div class="flex-y text-start">
    <label for="usernameInput">Username</label>
    <input type="text" placeholder="Username" id="usernameInput" />
  </div>
  <div class="flex-y text-start">
    <label for="passwordInput">Password</label>
    <input type="password" placeholder="Password" id="passwordInput" />
  </div>
  <button id="submitButton" disabled>Finished!</button>
</div>
