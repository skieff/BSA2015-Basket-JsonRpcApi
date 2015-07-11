import Backbone from 'libs/backbone'
import BasketView from './Basket'
import rpcClient from 'Service/JsonRpcClient'

class BasketCollection extends Backbone.View {

    //noinspection JSMethodCanBeStatic
    tagName() {
        return 'ul';
    }

    //noinspection JSMethodCanBeStatic
    attributes() {
        return {
            'class' : 'basket-list'
        }
    }

    initialize() {
        this.listenTo(this.collection, 'reset', this.onCollectionReset);

        rpcClient.getBaskets().then(Backbone.$.proxy(this.onBasketsFetched, this));
    }

    onBasketsFetched(basketsData) {
        console.log(basketsData);

        this.collection.reset(basketsData, {parse: true});
    }

    onCollectionReset(collection) {
        this.$el.empty();
        this.render(collection);
    }

    render(collection) {
        for(let basket of collection.models) {
            this.$el.append((new BasketView({model: basket})).$el);
        }
    }
}

export default BasketCollection;