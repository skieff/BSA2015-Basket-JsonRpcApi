require.config({

    paths: {
        backbone: 'libs/backbone',
        underscore: 'libs/underscore',
        jquery: 'libs/jquery-2.1.4',
        "jquery.jsonrpcclient": 'libs/jquery.jsonrpcclient'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        "jquery.jsonrpcclient" : {
            deps: ["jquery"],
            exports: 'jQuery.JsonRpcClient'
        }
    },

    packages: [
    ]

});

require(["main"]);
