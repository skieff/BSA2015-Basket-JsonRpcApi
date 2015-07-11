import Backbone from 'libs/backbone'
import BasketItemModel from './BasketItem'

class BasketItemCollection extends Backbone.Collection {
    //noinspection JSUnusedLocalSymbols
    initialize(models, options) {
        this.model = BasketItemModel;
    }
}

export default  BasketItemCollection;