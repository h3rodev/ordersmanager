Router.configure({
  layoutTemplate: 'AppLayout'
});

Router.route('/', function () {
	this.render('home');
});

Router.route('/details/:id', {
    name: 'details',
    template: 'details',
    data: function(){
        var currentList = this.params.id;
        return Orders.findOne({ id: parseInt(currentList) });
    }
});