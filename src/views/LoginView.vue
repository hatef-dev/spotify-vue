<template>
  <div class="bg-darkSpotify h-screen w-screen flex justify-center items-center text-white">
    <div class="flex justify-center flex-col gap-y-10 items-center">
      <div class="flex flex-col items-center gap-y-3">
        <IconSpotify class="text-white" />
        <h1 class="text-white text-5xl font-bold">Welcome Back</h1>
      </div>
      <veeForm class="flex flex-col gap-y-5" :validation-schema="loginSchema" @submit="handleSubmit">
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
    <div v-if="boxSubmit" class="h-screen w-full top-0 left-0 flex items-center justify-center fixed z-10 bg-black/50">
      <div
        class="w-100 h-30 rounded-md flex flex-col items-start pl-6 gap-y-4 justify-center text-white font-bold"
        :class="boxColorSubmit"
      >
        <h1 class="text-center">{{ msgSubmit }}</h1>
        <p class="text-white/60 text-sm">{{ msgPrivacy }}</p>
      </div>
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
        password: 'required|minValue:6',
      },
      msgSubmit: 'Waiting for confirmation',
      boxColorSubmit: 'bg-gray-500',
      msgPrivacy: 'We love you! and protect your privacy',
      boxSubmit: false,
    }
  },
  methods: {
    async handleSubmit(values) {
      this.boxSubmit = true
      this.msgSubmit = 'Please wait...'
      this.boxColorSubmit = 'bg-blue-500'
      this.msgPrivacy = 'Please Wait...'

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        this.msgSubmit = 'Login successful!'
        this.boxColorSubmit = 'bg-green-500'
        this.msgPrivacy = 'You can enjoy our services!'

        setTimeout(() => {
          this.boxSubmit = false
        }, 2000)
      } catch (error) {
        this.msgSubmit = 'An error occurred. Please try again.'
        this.boxColorSubmit = 'bg-red-500'
        this.msgPrivacy = 'Please check your information and try again.'

        setTimeout(() => {
          this.boxSubmit = false
        }, 2000)
      }
    }
  }
}
</script>
