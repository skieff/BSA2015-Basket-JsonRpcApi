import Backbone from 'libs/backbone'
import BasketItemView from './BasketItem'
import BasketItemCollectionModel from 'Model/BasketItemCollection'
import productCollection from 'Model/ProductCollection'
import _ from 'underscore'
import rpcClient from 'Service/JsonRpcClient'

class BasketItemCollection extends Backbone.View {
    //noinspection JSMethodCanBeStatic
    tagName() {
        return 'ul';
    }

    initialize(options) {
        this.basket = options.basket;

        this.newBasketItem = new this.collection.model({
            basket: this.basket.id,
            product: productCollection.firstId()
        }, options);

        this.listenTo(this.collection, 'reset', this.onCollectionReset);
        this.listenTo(this.collection, 'add', this.onAdd);
        this.listenTo(this.collection, 'save-item', this.onSaveItem);
        this.listenTo(this.collection, 'delete-item', this.onDeleteItem);
        this.listenTo(this.newBasketItem, 'save-item', this.onSaveItem);

        this.render(this.collection);
    }

    onDeleteItem(basketItem) {
        rpcClient
            .deleteBasketItem(_.clone(basketItem.attributes))
            .then(Backbone.$.proxy(this.onBasketItemSaved, this));
    }

    onSaveItem(basketItem) {
        rpcClient
            .saveBasketItem(_.clone(basketItem.attributes))
            .then(Backbone.$.proxy(this.onBasketItemSaved, this));
    }

    onBasketItemSaved(basketData) {
        this.basket.set(this.basket.parse(basketData));
    }

    onAdd(basketItem) {
        this.renderItem(basketItem);
    }

    onCollectionReset(collection) {
        this.$el.empty();
        this.render(collection);
    }

    render(collection) {
        this.renderItem(this.newBasketItem);

        for(let basketItem of collection.models) {
            this.renderItem(basketItem);
        }
    }

    renderItem(basketItem) {
        this.$el.append((new BasketItemView({model: basketItem})).$el);
    }
}

export default BasketItemCollection;