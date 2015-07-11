import Backbone from 'libs/backbone'
import BasketModel from './Basket'

class BasketCollection extends Backbone.Collection {

    initialize() {
        this.model = BasketModel;
    }

    //noinspection JSMethodCanBeStatic
    url() {
        return '/basket/';
    }
}

export default  BasketCollection;