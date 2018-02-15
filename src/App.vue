<template>
  <div id="app">
    <router-link to="/"><img src="./assets/logo.png"></router-link>
    <ul>
      <li v-for="technology in technologies" :key="technology">
        <router-link :to="linkFor(technology)">
          {{ technology }}
        </router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    linkFor(technology) {
      return `/${technology.toLowerCase()}`;
    },
  },
  data() {
    return {
      technologies: ['Vue', 'React', 'Elm'],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
