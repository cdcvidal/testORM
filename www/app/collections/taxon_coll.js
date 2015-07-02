/**

Collection taxon

**/
define(['jquery', 'underscore', 'backbone', 'models/taxon','config'],
	function($, _ ,Backbone, taxon, config){

	'use strict';

	return Backbone.Collection.extend({
		model: taxon,
		url: 'http://demo.sauvagesdepaca.fr/observation/ns_recompense/140',
	});

});