import cloneDeep from 'lodash/cloneDeep';

export default function (elm) {
  return {
    mounted() {
      const { ports, ...flags } = cloneDeep(this.$attrs);
      const app = elm.embed(this.$el, flags);

      if (ports) {
        ports(app.ports);
      }
    },
    render(h) {
      return h('div');
    },
  };
}
