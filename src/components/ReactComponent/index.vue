<template>
  <react-component :stuff="stuff" :arr="arr" :obj="obj"></react-component>
</template>

<script>
import ReactComponent from './ReactComponent';

export default {
  name: 'ReactComponent',
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
    'react-component': ReactComponent,
  },
};
</script>
