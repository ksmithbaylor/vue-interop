<template>
  <react-component :stuff="stuff"></react-component>
</template>

<script>
import ReactComponent from './ReactComponent';

export default {
  name: 'ReactComponent',
  data() {
    return {
      stuff: 'Here is some data from the Vue instance.',
    };
  },
  components: {
    'react-component': ReactComponent,
  },
};
</script>
