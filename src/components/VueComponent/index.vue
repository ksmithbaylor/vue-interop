<template>
  <vue-component :stuff="stuff" :arr="arr" :obj="obj"></vue-component>
</template>

<script>
import VueComponent from './VueComponent';

export default {
  name: 'VueComponent',
  data() {
    return {
      stuff: 'Here is some data from the Vue instance.',
      arr: [1, 2, 3],
      obj: {
        foo: {
          bar: 42,
        },
      },
    };
  },
  components: {
    'vue-component': VueComponent,
  },
};
</script>
