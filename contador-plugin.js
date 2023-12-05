import MyComponent from './MyComponent.vue';

export default {
  install: (app, options) => {
    app.component('MyPluginComponent', MyComponent);
  },
};
