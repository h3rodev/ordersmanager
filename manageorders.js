Orders = new Mongo.Collection('orders');

if (Meteor.isClient) {

	// Meteor.call('getOrders',function (error, result) {
	// 	if (!error) {

	// 		//Session.set('data',result);
	// 		console.log(result);
	// 	};
	// });

	Template.home.helpers({
		orders: function () {
			return Orders.find({gateway: "Cash on Delivery (COD)"}).fetch();			
		}
	});

	// Template.edit.helpers({
	// 	order: function () {
	// 		return  Orders.findOne( {_id: Session.get('currentdata')} );
	// 	}
	// });


	// Template.home.events({
	// 	'click .view': function () {
	// 		Session.set('currentdata', this._id );
	// 	}
	// });

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
