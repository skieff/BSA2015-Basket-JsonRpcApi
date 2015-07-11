<?php

namespace BSA2015\Basket;

use JsonRPC\Server;

class JsonRpcApi {
    static function factory($fileName) {
        return new static(new Server(), new YamlStorage($fileName));
    }

    function __construct(Server $server, StorageInterface $storage)
    {
        $this->_server = $server;
        $this->_storage = $storage;
        $this->_basketService = new BasketService($storage);
        $server->attach($this);
    }

    public function getBaskets() {
        $basketService = $this->_basketService;

        return array_values(array_map(function($basketData) use($basketService) {
            $basket = $basketService->findBasket($basketData);
            $basketData['basketItems'] = array_values($basketService->getBasketItems($basket));

            return $basketData;
        }, $basketService->getBasketArrayCopy()));
    }

    public function getProducts() {
        return array_values($this->_basketService->getProductArrayCopy());
    }

    public function saveBasketItem($basketItemData) {
        $basket = $this->_basketService->findBasket($basketItemData['basket']);
        $product = $this->_basketService->findProduct($basketItemData['product']);

        $basketItem = $this->_basketService->addBasketItem($basket, $product);
        $this->_basketService->updateBasketItem($basketItem, $basketItemData);

        $basketData = $basket->getArrayCopy();
        $basketData['basketItems'] = array_values($this->_basketService->getBasketItems($basket));

        return $basketData;
    }

    public function deleteBasketItem($basketItemData) {
        $this->_basketService->deleteBasketItem($basketItemData['basket'], $basketItemData['product']);

        $basket = $this->_basketService->findBasket($basketItemData['basket']);
        $basketData = $basket->getArrayCopy();
        $basketData['basketItems'] = array_values($this->_basketService->getBasketItems($basket));

        return $basketData;
    }

    public function run() {
        echo $this->_server->execute();

        $this->_storage->store(
            $this->_basketService->getBasketArrayCopy(),
            $this->_basketService->getProductArrayCopy(),
            $this->_basketService->getBasketItemArrayCopy()
        );
    }


}