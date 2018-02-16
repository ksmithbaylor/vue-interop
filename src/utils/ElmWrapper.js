export default function (elm) {
  return {
    props: {
      ports: {
        type: Function,
        required: false,
      },
      flags: {
        type: Object,
        required: false,
      },
    },
    render(createElement) {
      return createElement('div');
    },
    mounted() {
      const node = this.$el;
      const app = elm.embed(node, this.$props.flags);

      if (this.$props.ports) {
        this.$props.ports(app.ports);
      }
    },
  };
}
