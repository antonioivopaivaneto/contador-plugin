// contador-plugin.js

import { defineComponent } from 'vue';

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
    interval:{
        type:Number,
        default:200
    }
  },
  data() {
    return {
      count: this.from
    };
  },
  mounted() {
    const increment = () => {
      if (this.count < this.to) {
        this.count++;
        setTimeout(increment, this.interval); // Incremento a cada segundo (1000ms)
      }
    };
    increment();
  },
  template: '<div>{{ count }}</div>'
});
