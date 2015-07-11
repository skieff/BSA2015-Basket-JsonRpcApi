define(['exports', 'module', 'libs/backbone', './Basket', 'Service/JsonRpcClient'], function (exports, module, _libsBackbone, _Basket, _ServiceJsonRpcClient) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    var _Backbone = _interopRequireDefault(_libsBackbone);

    var _BasketView = _interopRequireDefault(_Basket);

    var _rpcClient = _interopRequireDefault(_ServiceJsonRpcClient);

    var BasketCollection = (function (_Backbone$View) {
        function BasketCollection() {
            _classCallCheck(this, BasketCollection);

            _get(Object.getPrototypeOf(BasketCollection.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(BasketCollection, _Backbone$View);

        _createClass(BasketCollection, [{
            key: 'tagName',

            //noinspection JSMethodCanBeStatic
            value: function tagName() {
                return 'ul';
            }
        }, {
            key: 'attributes',

            //noinspection JSMethodCanBeStatic
            value: function attributes() {
                return {
                    'class': 'basket-list'
                };
            }
        }, {
            key: 'initialize',
            value: function initialize() {
                this.listenTo(this.collection, 'reset', this.onCollectionReset);

                _rpcClient['default'].getBaskets().then(_Backbone['default'].$.proxy(this.onBasketsFetched, this));
            }
        }, {
            key: 'onBasketsFetched',
            value: function onBasketsFetched(basketsData) {
                console.log(basketsData);

                this.collection.reset(basketsData, { parse: true });
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
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = collection.models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var basket = _step.value;

                        this.$el.append(new _BasketView['default']({ model: basket }).$el);
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
        }]);

        return BasketCollection;
    })(_Backbone['default'].View);

    module.exports = BasketCollection;
});
//# sourceMappingURL=BasketCollection.js.map
