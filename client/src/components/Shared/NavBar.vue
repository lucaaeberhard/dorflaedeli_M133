<template>
  <div>
    <header role="banner" class="bg-blue">
      <div class="max-w-5xl mx-auto flex flex-wrap items-center px-5 py-5">
        <router-link
          to="/"
          class="flex items-center text-3xl text-white leading-none uppercase relative"
        >
          <span>Dorflädeli</span>
        </router-link>
        <div class="flex-1 w-0 text-right">
          
          <a
            href="#"
            class="ml-4 font-medium text-white inline-block align-middle relative"
            @click.prevent="handlerLogout"
            v-if="authenticated"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6 text-white inline-block align-middle"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </a>
          <router-link
            to="/checkout"
            class="ml-4 font-medium text-white inline-block align-middle relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6 text-white inline-block align-middle"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="inline-block align-base text-gray leading-none">{{
              totalCart
            }}</span>
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import appwrite from '@/services/appwrite';

export default {
  name: 'NavBar',
  props: {
    isCategory: {
      type: Boolean,
      default: () => true,
    },
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('category', ['categories']),
    ...mapGetters('cart', ['totalCart']),
    ...mapGetters('auth', ['authenticated']),
  },
  methods: {
    handlerLogout() {
      const promise = appwrite.account.deleteSession('current');

      promise.then(() => {
        localStorage.removeItem('cookieFallback');
        this.$store.dispatch('auth/logout');
        this.$router.push(
          {
            path: '/',
            force: true,
          },
          (error) => {
            console.log(error);
          }
        );
      });
    },
  },
};
</script>

<style scoped>
nav .router-link-exact-active.router-link-active {
  @apply border-orange;
}
</style>
