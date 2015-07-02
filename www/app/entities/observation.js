/**

Model observation

**/
define(['jquery', 'underscore','config'],
	function($, _ , config){

	'use strict';

    // $data.Entity.extend("Observation", {
    //     Id: { type: "int", key: true, computed: true },
    //     obsDate: { type: Date,required: true },
    //     photoFichier: { type: String, maxLength: 2000 },
    //     photoNom: { type: String, maxLength: 200 },
    //     Mission: { type: 'Mission', inverseProperty: 'Observations', keys: ['fkMission']},
    // });
    return persistence.define("Observation", {
        obsDate: "DATE",
        photoFichier: "TEXT",
        photoNom: "TEXT",
        //Mission: { type: 'Mission', inverseProperty: 'Observations', keys: ['fkMission']},
    });


});
