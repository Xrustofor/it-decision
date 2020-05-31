<template>
  <div id="app">
     <div class="flex container mx-auto py-8 px-6 h-screen">
       <div class="w-3/4 mr-4">
          <Header />
          <div class="mt-10 relative">

            <transition name="slide" mode="out-in">
              <router-view></router-view>
            </transition>

            <button class="fixed bottom-0 mb-5 z-20 flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12.9231C6 13.5178 6.44772 14 7 14C7.55229 14 8 13.5178 8 12.9231V8H12.9231C13.5178 8 14 7.55229 14 7C14 6.44772 13.5178 6 12.9231 6H8V1.07692C8 0.482155 7.55228 0 7 0C6.44771 0 6 0.482155 6 1.07692V6H1.07692C0.482155 6 0 6.44772 0 7C0 7.55229 0.482155 8 1.07692 8H6V12.9231Z" fill="white"/>
              </svg>
            </button>
            
          </div>
       </div>
      <div class="w-1/4">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
}
</script>
<style scoped>
  @media (min-width: 1440px){
    .container {
      max-width: 1440px;
    }
  }
  .slide-enter-active{
		animation: slideIn 0.2s;
	}
	.slide-leave-active{
		animation: slideOut 0.2s;
	}
	@keyframes slideIn{
		from{opacity: 0;}
		to{opacity: 1;}
	}
	@keyframes slideOut{
		from{opacity: 1;}
		to{opacity: 0;}
	}
</style>
