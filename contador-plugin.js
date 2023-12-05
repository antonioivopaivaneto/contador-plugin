export default {
  install: (app, options) => {
    app.component('MyPluginComponent', {
      props: {
        number1: {
          type: Number,
          required: true,
        },
        number2: {
          type: Number,
          required: true,
        },
      },
      template: `
        <div>
          <h1>My Plugin</h1>
          <p>Result: {{ number1 + number2 }}</p>
        </div>
      `,
    });
  },
};
