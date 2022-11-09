<script>
import { compile } from "./compile";

export default {
  name: "VueRenderer",

  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
  },

  render(h) {
    const children = compile(this.schema);
    console.log("result:", children);
    return h(
      "main",
      { class: "vue-renderer" },
      Array.isArray(children) ? children : [children]
    );
  },
};
</script>

<style>
</style>