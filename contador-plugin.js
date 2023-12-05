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
      render() {
        return this.$createElement('div', this.count);
      }
    });

    // Restante do seu código...
  }
};
