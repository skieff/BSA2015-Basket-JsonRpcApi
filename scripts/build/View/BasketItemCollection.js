define(['exports', 'module', 'libs/backbone', './BasketItem', 'Model/BasketItemCollection', 'Model/ProductCollection', 'underscore', 'Service/JsonRpcClient'], function (exports, module, _libsBackbone, _BasketItem, _ModelBasketItemCollection, _ModelProductCollection, _underscore, _ServiceJsonRpcClient) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    var _Backbone = _interopRequireDefault(_libsBackbone);

    var _BasketItemView = _interopRequireDefault(_BasketItem);

    var _BasketItemCollectionModel = _interopRequireDefault(_ModelBasketItemCollection);

    var _productCollection = _interopRequireDefault(_ModelProductCollection);

    var _2 = _interopRequireDefault(_underscore);

    var _rpcClient = _interopRequireDefault(_ServiceJsonRpcClient);

    var BasketItemCollection = (function (_Backbone$View) {
        function BasketItemCollection() {
            _classCallCheck(this, BasketItemCollection);

            _get(Object.getPrototypeOf(BasketItemCollection.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(BasketItemCollection, _Backbone$View);

        _createClass(BasketItemCollection, [{
            key: 'tagName',

            //noinspection JSMethodCanBeStatic
            value: function tagName() {
                return 'ul';
            }
        }, {
            key: 'initialize',
            value: function initialize(options) {
                this.basket = options.basket;

                this.newBasketItem = new this.collection.model({
                    basket: this.basket.id,
                    product: _productCollection['default'].firstId()
                }, options);

                this.listenTo(this.collection, 'reset', this.onCollectionReset);
                this.listenTo(this.collection, 'add', this.onAdd);
                this.listenTo(this.collection, 'save-item', this.onSaveItem);
                this.listenTo(this.collection, 'delete-item', this.onDeleteItem);
                this.listenTo(this.newBasketItem, 'save-item', this.onSaveItem);

                this.render(this.collection);
            }
        }, {
            key: 'onDeleteItem',
            value: function onDeleteItem(basketItem) {
                _rpcClient['default'].deleteBasketItem(_2['default'].clone(basketItem.attributes)).then(_Backbone['default'].$.proxy(this.onBasketItemSaved, this));
            }
        }, {
            key: 'onSaveItem',
            value: function onSaveItem(basketItem) {
                _rpcClient['default'].saveBasketItem(_2['default'].clone(basketItem.attributes)).then(_Backbone['default'].$.proxy(this.onBasketItemSaved, this));
            }
        }, {
            key: 'onBasketItemSaved',
            value: function onBasketItemSaved(basketData) {
                this.basket.set(this.basket.parse(basketData));
            }
        }, {
            key: 'onAdd',
            value: function onAdd(basketItem) {
                this.renderItem(basketItem);
            }
        }, {
            key: 'onCollectionReset',
            value: function onCollectionReset(collection) {
                this.$el.empty();
                this.render(collection);
            }
        }, {
            key: 'render',
            value: function render(collection) {
                this.renderItem(this.newBasketItem);

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = collection.models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var basketItem = _step.value;

                        this.renderItem(basketItem);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }, {
            key: 'renderItem',
            value: function renderItem(basketItem) {
                this.$el.append(new _BasketItemView['default']({ model: basketItem }).$el);
            }
        }]);

        return BasketItemCollection;
    })(_Backbone['default'].View);

    module.exports = BasketItemCollection;
});
//# sourceMappingURL=BasketItemCollection.js.map
