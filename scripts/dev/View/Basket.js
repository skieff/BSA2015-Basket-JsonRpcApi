import Backbone from 'libs/backbone';
import BasketItemCollectionView from './BasketItemCollection'

class Basket extends Backbone.View {
    //noinspection JSMethodCanBeStatic
    tagName() {
        return 'li';
    }

    initialize() {
        this.listenTo(this.model, 'change:totalPrice', this.onTotalPriceChanged);
        this.render(this.model);
    }

    //noinspection JSUnusedLocalSymbols
    onTotalPriceChanged(basket, newTotalPrice) {
        this.$('.price').text(newTotalPrice);
    }

    render(basket) {
        this.$el.append(basket.id + ': <span class="price">' + basket.get('totalPrice') + '</span>');
        this.$el.append((new BasketItemCollectionView({basket: this.model, collection: this.model.basketItems})).$el);
    }
}

export default Basket;