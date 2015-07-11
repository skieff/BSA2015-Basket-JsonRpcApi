import Backbone from 'libs/backbone'
import ProductOption from './ProductOption'

class ProductSelect extends Backbone.View {
    //noinspection JSMethodCanBeStatic
    tagName() {
        return 'select';
    }

    events() {
        return {
            'change': this.onChange
        };
    }

    initialize() {
        this.listenTo(this.collection, 'reset', this.onCollectionReset);

        this.render(this.collection);
    }

    onCollectionReset(collection) {
        this.$el.empty();
        this.render(collection);
    }

    onChange(evt) {
        this.model.set('product', Backbone.$(evt.target).val(), {silent: true});
    }

    render(collection) {
        for(let product of collection.models) {
            let option = (new ProductOption({model: product}));

            if (this.model.get('product') == product.id) {
                option.$el.prop('checked', true);
            }

            this.$el.append(option.$el);
        }
    }
}

export default ProductSelect;