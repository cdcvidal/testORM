/**

Database sqLite ou WebSQl with ORM persistenceJS

**/
define(['jquery', 'underscore', 'config','persistence'],
	function($, _ ,config, persistence){

	'use strict';

    persistence.debug = true;

    if (window.cordova) {
        document.addEventListener('deviceready', function(){
            persistence.store.cordovasql.config(
                persistence,
                'testpersisMOBILE',
                '0.0.1',                // DB version
                'My testpersis',          // DB display name
                5 * 1024 * 1024,        // DB size
                0                       // SQLitePlugin Background processing disabled
            );
        });
    }else{
        persistence.store.cordovasql.config(
            persistence,
            'testpersisWEB',
            '0.0.1',                // DB version
            'My testpersis',          // DB display name
            5 * 1024 * 1024,        // DB size
            0                       // SQLitePlugin Background processing disabled
        );
    }

    var entities ={};

    entities.Taxon = persistence.define("Taxon", {
        vernacularName: "TEXT",
        scientificName: "TEXT",
        scientificNameHtml: "TEXT",
        thumbnailFileName: "TEXT",
        posterFileName: "TEXT",
        description: "TEXT",
        url: "TEXT",
    });

    entities.Observation = persistence.define("Observation", {
        obsDate: "DATE",
        photoFichier: "TEXT",
        photoNom: "TEXT",
    });

    entities.Mission = persistence.define("Mission", {
        missionNom: "TEXT",
    });

    entities.Mission.hasMany('observations', entities.Observation, 'mission');
    entities.Observation.hasMany('taxons', entities.Taxon, 'observations');
    entities.Taxon.hasMany('observations', entities.Observation, 'taxons');

    persistence.schemaSync();

    return entities ;

});