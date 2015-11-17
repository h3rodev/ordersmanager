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

		var api = new Shopify.API({
		    shop: "danubedirecttest",
		    api_key: "8709cabd05fb5def217caa8ffdf95b7f",
		    password: "72eeb6f68efbf036471463b4662f0739"
		});
		var orderCount = api.countOrders();
		var recentOpenOrders = api.getOrders();//api.getAllOrders();


			for (var i = 0; i < orderCount; i++) {
				 Orders.insert( recentOpenOrders[i] );
				 console.log(i +" Done");
			}

			var added  = {
				newfiled:"",
			};
			Orders2.set(added);
		}//getOrders

	});//Meteor.methods

  });//Meteor.startup
}
