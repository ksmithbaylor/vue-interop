<template>
  <elm-component :flags="flags"></elm-component>
</template>

<script>
import ElmWrapper from '@/utils/ElmWrapper';
import ElmComponent from './ElmComponent.elm';

export default {
  name: 'ElmComponent',
  data() {
    return {
      flags: {
        stuff: 'Here is some data from the Vue instance.',
      },
    };
  },
  components: {
    'elm-component': ElmWrapper(ElmComponent.Main),
  },
};
</script>
