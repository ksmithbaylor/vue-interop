<template>
  <elm-component :stuff="stuff" :arr="arr" :obj="obj"></elm-component>
</template>

<script>
import ElmWrapper from '@/utils/ElmWrapper';
import ElmComponent from './ElmComponent.elm';

export default {
  name: 'ElmComponent',
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
    'elm-component': ElmWrapper(ElmComponent.Main),
  },
};
</script>
