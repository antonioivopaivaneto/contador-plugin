// contador-plugin.js

export default {
  install(Vue) {
    Vue.component('Contador', {
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
      data() {
        return {
          count: this.from
        };
      },
      mounted() {
        const increment = () => {
          if (this.count < this.to) {
            this.count++;
            setTimeout(increment, this.interval);
          }
        };
        increment();
      },
      template: '<div>{{ count }}</div>'
    });

    Vue.prototype.$incrementFromTo = function (from, to, interval) {
      let count = from;
      const increment = () => {
        if (count < to) {
          count++;
          setTimeout(increment, interval);
        }
      };
      increment();
    };
  }
};
