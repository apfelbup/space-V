<script setup>
  import HeaderBlock from '@/components/HeaderBlock.vue'
  import { ref } from 'vue'
  import { useCounterStore } from '@/store/counter';

  const open = ref(false)

  const counter = useCounterStore();
</script>

<template class="container">
  <header-block/>
  <main>
    <router-view/>
  </main>
</template>

<style lang="scss">
  @import './scss/global.scss';

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Courier New', Courier, monospace;

    margin: 0;

    color: $text-color;

    background: $body-color;
  }

  .modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
  }

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }

  .link {
    font-size: 20px;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 5px;

    color: $text-color;

    &:hover {
      opacity: 0.8;
    }

    &__icon {
      width: 30px;
    }
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>
