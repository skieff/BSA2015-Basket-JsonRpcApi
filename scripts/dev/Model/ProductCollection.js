import Backbone from 'libs/backbone'
import ProductModel from './Product'
import rpcClient from 'Service/JsonRpcClient'

class ProductCollection extends Backbone.Collection {

    initialize() {
        this.model = ProductModel;
    }

    //noinspection JSMethodCanBeStatic
    url() {
        return '/product/';
    }

    firstId() {
        return (this.first() || {id: ''}).id
    }
}

let productCollection = new ProductCollection();
rpcClient.getProducts().then(function(result) {
    productCollection.reset(result);
});

export default productCollection;