<template>
  <div class="bg-darkSpotify h-screen w-screen flex justify-center items-center text-white">
    <div class="flex justify-center flex-col gap-y-10 items-center">
      <div class="flex flex-col items-center gap-y-3">
        <IconSpotify class="text-white" />
        <h1 class="text-white text-5xl font-bold">Welcome Back</h1>
      </div>
      <veeForm class="flex flex-col gap-y-5" :validiton-schema="loginSchema" @submit="handleSubmit">
        <div class="flex flex-col gap-y-5">
          <div class="flex flex-col gap-y-1">
            <label for="email" class="text-white">Email</label>
            <veeField
              name="email"
              type="email"
              id="email"
              class="w-80 h-10 rounded-md px-2 border border-white/40 hover:border-white focus:outline-0 text-white focus:border-white"
            />
            <ErrorMessage name="email" class="text-red-500" />
          </div>
          <div class="flex flex-col gap-y-1">
            <label for="password" class="text-white">Password</label>
            <veeField
              name="password"
              type="password"
              id="password"
              class="w-80 h-10 rounded-md px-2 border border-white/40 hover:border-white focus:outline-0 text-white focus:border-white"
            />
            <ErrorMessage name="password" class="text-red-500" />
          </div>
        </div>
        <div class="mt-5">
          <button class="w-80 h-10 rounded-md bg-green-500 text-darkSpotify font-bold">
            Confirm
          </button>
        </div>
      </veeForm>
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
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:6',
      },
    }
  },
  methods: {
    handleSubmit(values) {
      console.log(values)
    }
  }
}
</script>
