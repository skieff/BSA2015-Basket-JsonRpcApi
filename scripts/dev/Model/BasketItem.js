import Backbone from 'libs/backbone'
import _ from 'underscore'

class BasketItem extends Backbone.Model {
    initialize() {
    }

    url() {
        var base =
            _.result(this, 'urlRoot') ||
            _.result(this.collection, 'url');

        if (this.isNew()) return base;
        var product = this.previous('product') || this.attributes['product'];
        return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(product);

    }
}

export default BasketItem;