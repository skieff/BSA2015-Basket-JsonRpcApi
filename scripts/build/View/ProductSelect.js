define(['exports', 'module', 'libs/backbone', './ProductOption'], function (exports, module, _libsBackbone, _ProductOption) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    var _Backbone = _interopRequireDefault(_libsBackbone);

    var _ProductOption2 = _interopRequireDefault(_ProductOption);

    var ProductSelect = (function (_Backbone$View) {
        function ProductSelect() {
            _classCallCheck(this, ProductSelect);

            _get(Object.getPrototypeOf(ProductSelect.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(ProductSelect, _Backbone$View);

        _createClass(ProductSelect, [{
            key: 'tagName',

            //noinspection JSMethodCanBeStatic
            value: function tagName() {
                return 'select';
            }
        }, {
            key: 'events',
            value: function events() {
                return {
                    'change': this.onChange
                };
            }
        }, {
            key: 'initialize',
            value: function initialize() {
                this.listenTo(this.collection, 'reset', this.onCollectionReset);

                this.render(this.collection);
            }
        }, {
            key: 'onCollectionReset',
            value: function onCollectionReset(collection) {
                this.$el.empty();
                this.render(collection);
            }
        }, {
            key: 'onChange',
            value: function onChange(evt) {
                this.model.set('product', _Backbone['default'].$(evt.target).val(), { silent: true });
            }
        }, {
            key: 'render',
            value: function render(collection) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = collection.models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var product = _step.value;

                        var option = new _ProductOption2['default']({ model: product });

                        if (this.model.get('product') == product.id) {
                            option.$el.prop('checked', true);
                        }

                        this.$el.append(option.$el);
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

        return ProductSelect;
    })(_Backbone['default'].View);

    module.exports = ProductSelect;
});
//# sourceMappingURL=ProductSelect.js.map
