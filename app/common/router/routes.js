Router.configure({
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound',
    layoutTemplate: 'BaseLayout'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/board/new', {
  name: 'new',
  controller: 'NewBoardController',
  where: 'client'
});

Router.route('/board/:id', {
  name: 'board',
  controller: 'ShowBoardController',
  where: 'client'
});

/*

/ => home
/settings

/sign-in
/sign-up
/forgot-password

/boards
/board/:id
/board/new


*/

Router.route('boards', {
  name: 'boards',
  controller: 'BoardsController',
  where: 'client'
});