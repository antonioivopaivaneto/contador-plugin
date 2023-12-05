import { defineComponent, ref, onMounted, defineProps } from 'vue';

export default defineComponent({
  name: 'Contador',
  setup() {
    const props = defineProps({
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

    const count = ref(props.from);

    onMounted(() => {
      const increment = () => {
        if (count.value < props.to) {
          count.value++;
          setTimeout(increment, props.interval);
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
