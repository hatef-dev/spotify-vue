<template>
  <div class="bg-darkSpotify  flex justify-center items-center text-white overflow-x-hidden">
    <div class="flex justify-center flex-col gap-y-10 items-center my-20">
      <div class="flex flex-col items-center gap-y-3 w-[400px] text-center  ">
        <IconSpotify class="text-white" />
        <h1 class="text-white text-5xl font-bold">Sing up to start listening</h1>
      </div>
      <form class="flex flex-col gap-y-5">
        <div class="flex flex-col gap-y-3">
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
            <label for="password" class="text-white">Password</label>
            <input
              type="password"
              id="password"
              class="w-80 h-10 rounded-md px-2 border border-white/40 hover:border-white focus:outline-0 text-white focus:border-white"
            />
            <p class="text-red-500"></p>
          </div>
          <div class="flex flex-col gap-y-1">
            <label for="confirmPassword" class="text-white">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              class="w-80 h-10 rounded-md px-2 border border-white/40 hover:border-white focus:outline-0 text-white focus:border-white"
            />
            <p class="text-red-500"></p>
          </div>
          <div class="flex flex-col gap-y-1">
            
            <label for="name" class="text-white">Name</label>
            <input
              type="text"
              id="name"
              class="w-80 h-10 rounded-md px-2 border border-white/40 hover:border-white focus:outline-0 text-white focus:border-white"
            />
            <p class="text-red-500"></p>
          </div>
          <div class="flex flex-col gap-y-1">
            <label for="gender" class="text-white">Gender</label>
            <select
              name="gender"
              class="w-80 h-10 rounded-md px-2 border border-white/40 hover:border-white focus:outline-0 text-white focus:border-white"
              id="gender"
            >
              <option value="" class="text-white/60" disabled selected>Select your gender</option>
              <option value="male" class="text-black">Male</option>
              <option value="female" class="text-black">Female</option>
              <option value="non-binary" class="text-black">Non-binary</option>
            </select>
            <p class="text-red-500"></p>
          </div>
          <div class="flex flex-col gap-y-1">
            <label for="country" class="text-white">Country</label>
            <select
              name="country"
              class="w-80 h-10 rounded-md px-2 border border-white/40 hover:border-white focus:outline-0 text-white focus:border-white"
              id="country"
            >
              <option value="" class="text-white/60" disabled selected>Select your country</option>
              <option class="text-black" v-for="country in countries" :key="country.alpha2Code" :value="country.name">{{ country.name }}</option>
            </select>
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
  name: 'SingupView',
  data() {
    return {
      countries: [],
      selectedCountry: '',
    }
  },
  components: {
    IconSpotify,
  },
  mounted() {
    this.getCountries()
  },
  methods: {
    async getCountries() {
      const res = await fetch('/api-countries/countries')
      const countries = await res.json()
    //   console.log(countries)
      this.countries = countries
    }
  }
}
</script>
