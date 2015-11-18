Orders = new Mongo.Collection('orders');
Orders2 = new Mongo.Collection('orders2');
if (Meteor.isClient) {

	// Meteor.call('getOrders',function (error, result) {
	// 	if (!error) {

	// 		//Session.set('data',result);
	// 		console.log(result);
	// 	};
	// });

	Template.home.helpers({
		orders: function () {
			return Orders.find({name:'#1933'}).fetch();
			//return Session.get('data');
		}
	});


}

if (Meteor.isServer) {


  Meteor.startup(function () {


	Meteor.methods({
		removeOrders:function(){
			Orders.remove({});
		},

		getOrders:function(){


		}//getOrders

	});//Meteor.methods

  });//Meteor.startup
}
