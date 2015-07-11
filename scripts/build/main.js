define(['exports', 'View/BasketCollection', 'Model/BasketCollection'], function (exports, _ViewBasketCollection, _ModelBasketCollection) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _BasketCollectionView = _interopRequireDefault(_ViewBasketCollection);

    var _BasketCollection = _interopRequireDefault(_ModelBasketCollection);

    var basketList = new _BasketCollection['default']();

    new _BasketCollectionView['default']({
        collection: basketList
    }).$el.appendTo('body');
});
//# sourceMappingURL=main.js.map
