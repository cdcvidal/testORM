define(['marionette', 'config','./base/home/lyt-home'

],function( Marionette, config,
	LytHome

){
	'use strict';
	return Marionette.Object.extend({

		initialize: function(){
			this.rgMain=this.options.app.rootView.rgMain;
			this.rgHeader=this.options.app.rootView.rgHeader;
			this.rgFooter=this.options.app.rootView.rgFooter;
		},

		home: function() {
			Backbone.history.navigate('');
			console.log(this.options.app.collection);
			this.rgMain.show(new LytHome());
		},

	});
});
