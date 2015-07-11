import Backbone from 'libs/backbone';
import ProductSelect from './ProductSelect'
import productCollection from 'Model/ProductCollection'

class BasketItem extends Backbone.View {

    events() {
        return {
            'change [name="amount"]': this.onUiAmountChange,
            'click [name="add"]': this.onUiAddClick,
            'click [name="save"]': this.onUiSaveClick,
            'click [name="delete"]': this.onUiDeleteClick
        };
    }

    //noinspection JSMethodCanBeStatic
    tagName() {
        return 'li';
    }

    initialize() {
        this.listenTo(this.model, 'change', this.onModelSync);
        this.listenTo(this.model, 'remove', this.onModelDestroy);

        this.render(this.model);
    }

    render(basketItem) {
        if (basketItem.isNew()) {
            this.$el.append(Backbone.$('<div class="field-container"></div>').append(
                (new ProductSelect({model: basketItem, collection: productCollection}).$el)
            ));
            this.$el.append('<div class="field-container"><button name="add">Add</button></div>');
        } else {
            this.$el.append(Backbone.$('<div class="field-container"></div>').append(
                basketItem.get('name') + ': '
            ));
            this.$el.append(Backbone.$('<div class="field-container"></div>')
                .append('<input type="number" min="1" name="amount" value="' + basketItem.get('itemsAmount') + '" />')
                .append(
                    ' x ' + basketItem.get('price') + ' = ' +
                    basketItem.get('totalPrice')
                )
            );
            this.$el.append(Backbone.$('<div class="field-container"></div>')
                .append('<button name="save">Save</button>')
                .append('<button name="delete">Delete</button>')
            );
        }
    }

    onModelDestroy() {
        this.$el.remove();
    }

    onUiSaveClick() {
        if (this.model.hasChanged()) {
            this.model.trigger('save-item', this.model);
        }
    }

    onUiDeleteClick() {
        this.model.trigger('delete-item', this.model);
    }

    onModelSync(item) {
        this.$el.empty();
        this.render(item);
    }

    onUiAddClick() {
        this.model.trigger('save-item', this.model);
    }

    onUiAmountChange(evt) {
        this.model.set('itemsAmount', Backbone.$(evt.target).val(), {silent: true});
    }
}

export default BasketItem;