define(['exports', 'module', 'jquery.jsonrpcclient', 'jquery'], function (exports, module, _jqueryJsonrpcclient, _jquery) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _JsonRpcClient = _interopRequireDefault(_jqueryJsonrpcclient);

    var _$ = _interopRequireDefault(_jquery);

    var jsonRpcClient = new _JsonRpcClient['default']({ ajaxUrl: '/api.php' });

    jsonRpcClient.execute = function (method, args) {
        var deferred = _$['default'].Deferred();

        this.call(method, args || [], function (result) {
            deferred.resolve(result);
        }, function (error) {
            console.log(error);
            deferred.reject(error);
        });

        return deferred.promise();
    };

    jsonRpcClient.getBaskets = function () {
        return this.execute('getBaskets');
    };

    jsonRpcClient.getProducts = function () {
        return this.execute('getProducts');
    };

    jsonRpcClient.saveBasketItem = function (basketItemData) {
        return this.execute('saveBasketItem', [basketItemData]);
    };

    jsonRpcClient.deleteBasketItem = function (basketItemData) {
        return this.execute('deleteBasketItem', [basketItemData]);
    };

    module.exports = jsonRpcClient;
});
//# sourceMappingURL=JsonRpcClient.js.map
