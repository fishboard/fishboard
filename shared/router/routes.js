Router.route('/', {
  name: 'home'
});

Router.route('/dashboards');
Router.route('/board/:id', {
  name: 'boardPage'
});
