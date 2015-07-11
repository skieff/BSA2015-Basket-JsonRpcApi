define(['exports', 'module', 'libs/backbone', './Product', 'Service/JsonRpcClient'], function (exports, module, _libsBackbone, _Product, _ServiceJsonRpcClient) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    var _Backbone = _interopRequireDefault(_libsBackbone);

    var _ProductModel = _interopRequireDefault(_Product);

    var _rpcClient = _interopRequireDefault(_ServiceJsonRpcClient);

    var ProductCollection = (function (_Backbone$Collection) {
        function ProductCollection() {
            _classCallCheck(this, ProductCollection);

            _get(Object.getPrototypeOf(ProductCollection.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(ProductCollection, _Backbone$Collection);

        _createClass(ProductCollection, [{
            key: 'initialize',
            value: function initialize() {
                this.model = _ProductModel['default'];
            }
        }, {
            key: 'url',

            //noinspection JSMethodCanBeStatic
            value: function url() {
                return '/product/';
            }
        }, {
            key: 'firstId',
            value: function firstId() {
                return (this.first() || { id: '' }).id;
            }
        }]);

        return ProductCollection;
    })(_Backbone['default'].Collection);

    var productCollection = new ProductCollection();
    _rpcClient['default'].getProducts().then(function (result) {
        productCollection.reset(result);
    });

    module.exports = productCollection;
});
//# sourceMappingURL=ProductCollection.js.map
