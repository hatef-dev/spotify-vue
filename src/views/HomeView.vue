<template>
  <div class="bg-darkSpotify text-white">
    <header class="bg-black flex justify-between items-center pl-6 py-3">
      <div class="flex items-center gap-x-8">
        <IconSpotify class="text-white" />
        <button
          class="p-2 bg-[#292929] rounded-full hover:bg-[#393939] scale-100 hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <IconHome class="text-white w-6 h-6" />
        </button>
        <div class="relative ">
          <input
            ref="searchInput"
            v-model="musicName"
            type="text"
            placeholder="What do you want to play?"
            class="peer bg-[#292929] text-white group p-2 pl-10 pr-12 rounded-full w-[474px] focus:outline-2 focus:outline-white"
          />
          <span class="absolute top-1/2 right-1 transform -translate-y-1/2">
            <div class="px-2 border-l-2 border-[#747474]">
              <IconBrowser
                class="text-white/30 peer-has- w-6 h-6 hover:text-white transition-all duration-300"
              />
            </div>
          </span>
          <span class="absolute top-1/2 left-3 transform -translate-y-1/2">
            <IconSearch
              ref="searchIcon"
              class="text-white/30  peer-focus:text-white w-6 h-6 hover:text-white transition-all duration-300"
            />
          </span>
          <span ref="searchShortcut" class="absolute top-1/2 peer-hover:opacity-100 peer-focus:opacity-0 left-1/2 transform -translate-x-1/12 opacity-0 -translate-y-1/2 flex gap-x-1 transition-opacity duration-300 ">
            <span class="border border-[#747474] px-1 rounded-[2px] text-center ">
              Ctrl
            </span>
            <span class="border border-[#747474] px-1 rounded-[2px] text-center ">
              K
            </span>
          </span>
        </div>
      </div>
      <div class="flex items-center gap-x-6 px-2">
        <a href="" class="text-white/60 hover:text-white transition-all duration-300">Premium</a>
        <router-link to="/signup" class="text-white/60 hover:text-white transition-all duration-300">Sign Up</router-link>
        <router-link to="/login" class="bg-white text-black px-8 font-bold py-2 rounded-full">Login</router-link>
      </div>
    </header>
  </div>
</template>

<script>
import IconSpotify from '@/components/icons/IconSpotify.vue'
import IconHome from '@/components/icons/IconHome.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconBrowser from '@/components/icons/IconBrowser.vue'
export default {
  name: 'HomeView',
  components: {
    IconSpotify,
    IconHome,
    IconBrowser,
    IconSearch,
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  data() {
    return {
      musicName: '',
    }
  },

  watch: {
    musicName(){
      if (this.musicName) {
        this.$refs.searchShortcut?.classList.add('opacity-0')
        this.$refs.searchShortcut?.classList.remove('peer-hover:opacity-100')

      } else {
        this.$refs.searchShortcut?.classList.add('opacity-0')
        this.$refs.searchShortcut?.classList.add('peer-hover:opacity-100')
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  },

  methods: {
    handleKeydown(e) {
      if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        this.$refs.searchInput?.focus()
      }
    },
  },
}
</script>
