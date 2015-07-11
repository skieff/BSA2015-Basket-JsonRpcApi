import JsonRpcClient from 'jquery.jsonrpcclient'
import $ from 'jquery'

var jsonRpcClient = new JsonRpcClient({ajaxUrl: '/api.php'});

jsonRpcClient.execute = function(method, args) {
    let deferred = $.Deferred();

    this.call(
        method,
        args || [],
        function(result){
            deferred.resolve(result)
        },
        function(error){
            console.log(error);
            deferred.reject(error);
        }
    );

    return deferred.promise();
};

jsonRpcClient.getBaskets = function() {
    return this.execute('getBaskets');
};

jsonRpcClient.getProducts = function() {
    return this.execute('getProducts');
};

jsonRpcClient.saveBasketItem = function(basketItemData) {
    return this.execute('saveBasketItem', [basketItemData]);
};

jsonRpcClient.deleteBasketItem = function(basketItemData) {
    return this.execute('deleteBasketItem', [basketItemData]);
};

export default jsonRpcClient;