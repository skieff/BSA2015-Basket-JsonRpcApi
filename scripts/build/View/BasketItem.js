define(['exports', 'module', 'libs/backbone', './ProductSelect', 'Model/ProductCollection'], function (exports, module, _libsBackbone, _ProductSelect, _ModelProductCollection) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    var _Backbone = _interopRequireDefault(_libsBackbone);

    var _ProductSelect2 = _interopRequireDefault(_ProductSelect);

    var _productCollection = _interopRequireDefault(_ModelProductCollection);

    var BasketItem = (function (_Backbone$View) {
        function BasketItem() {
            _classCallCheck(this, BasketItem);

            _get(Object.getPrototypeOf(BasketItem.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(BasketItem, _Backbone$View);

        _createClass(BasketItem, [{
            key: 'events',
            value: function events() {
                return {
                    'change [name="amount"]': this.onUiAmountChange,
                    'click [name="add"]': this.onUiAddClick,
                    'click [name="save"]': this.onUiSaveClick,
                    'click [name="delete"]': this.onUiDeleteClick
                };
            }
        }, {
            key: 'tagName',

            //noinspection JSMethodCanBeStatic
            value: function tagName() {
                return 'li';
            }
        }, {
            key: 'initialize',
            value: function initialize() {
                this.listenTo(this.model, 'change', this.onModelSync);
                this.listenTo(this.model, 'remove', this.onModelDestroy);

                this.render(this.model);
            }
        }, {
            key: 'render',
            value: function render(basketItem) {
                if (basketItem.isNew()) {
                    this.$el.append(_Backbone['default'].$('<div class="field-container"></div>').append(new _ProductSelect2['default']({ model: basketItem, collection: _productCollection['default'] }).$el));
                    this.$el.append('<div class="field-container"><button name="add">Add</button></div>');
                } else {
                    this.$el.append(_Backbone['default'].$('<div class="field-container"></div>').append(basketItem.get('name') + ': '));
                    this.$el.append(_Backbone['default'].$('<div class="field-container"></div>').append('<input type="number" min="1" name="amount" value="' + basketItem.get('itemsAmount') + '" />').append(' x ' + basketItem.get('price') + ' = ' + basketItem.get('totalPrice')));
                    this.$el.append(_Backbone['default'].$('<div class="field-container"></div>').append('<button name="save">Save</button>').append('<button name="delete">Delete</button>'));
                }
            }
        }, {
            key: 'onModelDestroy',
            value: function onModelDestroy() {
                this.$el.remove();
            }
        }, {
            key: 'onUiSaveClick',
            value: function onUiSaveClick() {
                if (this.model.hasChanged()) {
                    this.model.trigger('save-item', this.model);
                }
            }
        }, {
            key: 'onUiDeleteClick',
            value: function onUiDeleteClick() {
                this.model.trigger('delete-item', this.model);
            }
        }, {
            key: 'onModelSync',
            value: function onModelSync(item) {
                this.$el.empty();
                this.render(item);
            }
        }, {
            key: 'onUiAddClick',
            value: function onUiAddClick() {
                this.model.trigger('save-item', this.model);
            }
        }, {
            key: 'onUiAmountChange',
            value: function onUiAmountChange(evt) {
                this.model.set('itemsAmount', _Backbone['default'].$(evt.target).val(), { silent: true });
            }
        }]);

        return BasketItem;
    })(_Backbone['default'].View);

    module.exports = BasketItem;
});
//# sourceMappingURL=BasketItem.js.map
