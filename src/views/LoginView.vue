<template>
  <div class="bg-darkSpotify h-screen w-screen flex justify-center items-center text-white">
    <div class="flex justify-center flex-col gap-y-10 items-center">
      <div class="flex flex-col items-center gap-y-3">
        <IconSpotify class="text-white" />
        <h1 class="text-white text-5xl font-bold">Welcome Back</h1>
      </div>
      <form class="flex flex-col gap-y-5">
        <div class="flex flex-col gap-y-5">
          <div class="flex flex-col gap-y-1">
            <label for="email" class="text-white">Email</label>
            <input
              type="email"
              id="email"
              class="w-80 h-10 rounded-md px-2 border border-white/40 hover:border-white focus:outline-0 text-white focus:border-white"
            />
            <p class="text-red-500"></p>
          </div>
          <div class="flex flex-col gap-y-1">
            <label for="email" class="text-white">Password</label>
            <input
              type="password"
              id="password"
              class="w-80 h-10 rounded-md px-2 border border-white/40 hover:border-white focus:outline-0 text-white focus:border-white"
            />
            <p class="text-red-500"></p>
          </div>
        </div>
        <div class="mt-5">
          <button class="w-80 h-10 rounded-md bg-green-500 text-darkSpotify font-bold">
            Confirm
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import IconSpotify from '@/components/icons/IconSpotify.vue'
export default {
    name: 'LoginView',
  components: {
    IconSpotify,
  },
}
</script>
