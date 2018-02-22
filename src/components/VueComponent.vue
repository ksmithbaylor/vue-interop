<template>
  <div>
    <p>This was rendered with Vue!</p>
    <p>{{ stuff }}</p>
    <p>{{ arr }}</p>
    <p>{{ obj }}</p>
  </div>
</template>

<script>
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
};
</script>
