<template>
  <div>
    <p>This was rendered with Vue!</p>
    <p>{{ stuff }}</p>
  </div>
</template>

<script>
export default {
  name: 'VueComponent',
  data() {
    return {
      stuff: 'Here is some data from the Vue instance.',
    };
  },
};
</script>
