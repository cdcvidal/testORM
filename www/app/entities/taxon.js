/**

Model Taxon

**/
define(['jquery', 'underscore', 'config'],
	function($, _ ,config){

	'use strict';

   return persistence.define("Taxon", {
        //Id: { type: "int", key: true, computed: true },
        vernacularName: "TEXT",
        scientificName: "TEXT",
        scientificNameHtml: "TEXT",
        thumbnailFileName: "TEXT",
        posterFileName: "TEXT",
        description: "TEXT",
        url: "TEXT",
       // Missions: { type: Array, elementType: "Mission", inverseProperty: "Taxon" }
    });

});
