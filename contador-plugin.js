import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'Contador',
  props: {
    from: {
      type: Number,
      default: 0
    },
    to: {
      type: Number,
      required: true
    },
    interval: {
      type: Number,
      default: 1000
    }
  },
  setup(props) {
    const count = ref(props.from);

    watch(count, (newValue) => {
      if (newValue < props.to) {
        setTimeout(() => {
          count.value++;
        }, props.interval);
      }
    });

    return { count };
  }
});
