define(['exports', 'module', 'libs/backbone', 'underscore'], function (exports, module, _libsBackbone, _underscore) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    var _Backbone = _interopRequireDefault(_libsBackbone);

    var _2 = _interopRequireDefault(_underscore);

    var BasketItem = (function (_Backbone$Model) {
        function BasketItem() {
            _classCallCheck(this, BasketItem);

            _get(Object.getPrototypeOf(BasketItem.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(BasketItem, _Backbone$Model);

        _createClass(BasketItem, [{
            key: 'initialize',
            value: function initialize() {}
        }, {
            key: 'url',
            value: function url() {
                var base = _2['default'].result(this, 'urlRoot') || _2['default'].result(this.collection, 'url');

                if (this.isNew()) return base;
                var product = this.previous('product') || this.attributes['product'];
                return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(product);
            }
        }]);

        return BasketItem;
    })(_Backbone['default'].Model);

    module.exports = BasketItem;
});
//# sourceMappingURL=BasketItem.js.map
