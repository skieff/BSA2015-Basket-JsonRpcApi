import Backbone from 'libs/backbone'
import BasketItemCollection from 'Model/BasketItemCollection'

class Basket extends Backbone.Model {
    initialize(attributes, options) {
        this.basketItems = this.basketItems || new BasketItemCollection([], options);
    }

    parse(attributes, options) {
        this.basketItems = this.basketItems || new BasketItemCollection([], options);
        this.basketItems.set(attributes.basketItems);

        delete attributes.basketItems;

        return attributes;
    }
}

export default Basket;