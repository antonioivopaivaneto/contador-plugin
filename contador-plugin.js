import { defineComponent, ref, onMounted, defineProps } from 'vue';

export default defineComponent({
  name: 'Contador',
  setup(props) {
    // Define as props utilizando defineProps
    const { from, to, interval } = defineProps({
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
        default: 100
      }
    });

    const count = ref(from);

    onMounted(() => {
      const increment = () => {
        if (count.value < to) {
          count.value++;
          setTimeout(increment, interval);
        }
      };
      increment();
    });

    return {
      count
    };
  },
  template: '<div>{{ count }}</div>'
});
