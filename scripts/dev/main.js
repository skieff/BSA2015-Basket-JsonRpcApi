import BasketCollectionView from 'View/BasketCollection'
import BasketCollection from 'Model/BasketCollection'

let basketList = new BasketCollection();

(new BasketCollectionView({
    collection: basketList
})).$el.appendTo('body');

