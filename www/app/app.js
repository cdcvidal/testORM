define(['marionette', 'lyt-rootview', 'router', 'controller', 'persistence' ,'database' /*, 'entities/taxon', 'entities/observation', 'entities/mission'*/, 'collections/taxon_coll'],
    function(Marionette, Lyt_rootview, Router, Controller, persistence , entities /*, Taxon, Observation, MissionInfo */, Collection) {


        var app = {},
            JST = window.JST = window.JST || {};

        Backbone.Marionette.Renderer.render = function(template, data) {
            if (!JST[template]) throw "Template '" + template + "' not found!";
            return JST[template](data);
        };

        app = new Marionette.Application();

        app.on('start', function() {
            app.rootView = new Lyt_rootview();
            app.rootView.render();
            app.controller = new Controller({
                app: app
            });
            app.router = new Router({
                controller: app.controller,
                app: app
            });

            var taxon = new entities.Taxon({vernacularName: "MON TAXON TEST 5"});
            var obs = new entities.Observation({obsDate : new Date()});
            //var mission = new entities.Mission({missionNom: "Mission Tutu"});

            //mission.observations.add(obs);
            obs.taxons.add(taxon);
            //persistence.add(mission);
            persistence.flush();




            Backbone.history.start();
        });

        $(document).ajaxStart(function(e) {
            $('#header-loader').removeClass('hidden');
        });
        $(document).ajaxStop(function() {
            $('#header-loader').addClass('hidden');
        });

        return app;
    });