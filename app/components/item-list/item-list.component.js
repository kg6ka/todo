"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var items_service_1 = require('../../services/items.service');
var ItemListComponent = (function () {
    function ItemListComponent(ItemsService) {
        this.ItemsService = ItemsService;
        this.items = [];
    }
    ItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ItemsService.getItems()
            .then(function (res) { return _this.items = res; });
    };
    Object.defineProperty(ItemListComponent.prototype, "sortItems", {
        get: function () {
            return this.items
                .map(function (item) {
                return item;
            })
                .sort(function (a, b) {
                if (a.title > b.title)
                    return 1;
                return -1;
            })
                .sort(function (a, b) {
                if (a.done && !b.done)
                    return 1;
                return -1;
            });
        },
        enumerable: true,
        configurable: true
    });
    ItemListComponent.prototype.onRemoveItem = function (item) {
        this.ItemsService.removeItem(item).then(function (item) { return console.log(item); });
    };
    ItemListComponent = __decorate([
        core_1.Component({
            selector: 'item-list',
            templateUrl: './app/components/item-list/item-list.partial.html'
        }), 
        __metadata('design:paramtypes', [items_service_1.ItemsService])
    ], ItemListComponent);
    return ItemListComponent;
}());
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=item-list.component.js.map