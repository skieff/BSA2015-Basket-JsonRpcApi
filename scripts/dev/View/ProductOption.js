import Backbone from 'libs/backbone';

class ProductOption extends Backbone.View {
    //noinspection JSMethodCanBeStatic
    tagName() {
        return 'option';
    }

    attributes() {
        return {
            option: this.model.get('name') + ': ' + this.model.get('price'),
            value: this.model.id
        }
    }

    initialize() {
        this.render(this.model);
    }

    render(product) {
        this.$el.append(product.get('name') + ': ' + product.get('price'));
    }
}

export default ProductOption;