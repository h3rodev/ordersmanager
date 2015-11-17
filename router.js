Router.configure({
  layoutTemplate: 'AppLayout'
});

Router.route('/', function () {
	this.render('home');
});