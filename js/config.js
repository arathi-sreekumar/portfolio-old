require.config({
    deps: ['main'],
    paths: {
        jquery: 'vendor/jquery1.7.2',
        html5shim: 'vendor/html5shiv'
        // hbs: 'vendor/hbs',
        // Handlebars: 'vendor/Handlebars',
        // json2: 'vendor/json2',
        // underscore: 'vendor/lodash',
        // backbone: 'vendor/backbone',
        // jqueryui: 'vendor/jqueryui',
        // 'hbs/underscore': 'vendor/hbs/underscore',
        // 'hbs/i18nprecompile': 'vendor/hbs/i18nprecompile',
        // 'hbs/json2': 'vendor/hbs/json2',
        // localstorage: 'vendor/backbone.localStorage',
        // layoutmanager: 'vendor/backbone.layoutmanager',
        // 'jquery.validate': 'vendor/jquery.validate',
        // text: 'vendor/text',
        // es5: 'vendor/es5-shim',
        // migrate: 'vendor/migrate'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        }
        // backbone: {
        //     deps: ['jquery', 'underscore', 'migrate']
        // },
        // hbs: {
        //     deps: ['Handlebars']
        // },
        // localstorage: {
        //     deps: ['backbone']
        // },
        // 'p13n/storage': {
        //     deps: ['localstorage', 'layoutmanager', 'jquery.validate']
        // },
        // layoutmanager: {
        //     exports: 'Backbone.Layout',
        //     deps: ['backbone']
        // }
    }
});
