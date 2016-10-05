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
var ItemListComponent = (function () {
    function ItemListComponent() {
        this.toggled = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
    }
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
    ItemListComponent.prototype.onItemToggle = function (item) {
        console.log('onItemToggle', item);
        this.toggled.emit(item);
    };
    ItemListComponent.prototype.onDeleteItem = function (item) {
        console.log('onDeleteItem', item);
        this.remove.emit(item);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ItemListComponent.prototype, "items", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ItemListComponent.prototype, "toggled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ItemListComponent.prototype, "remove", void 0);
    ItemListComponent = __decorate([
        core_1.Component({
            selector: 'item-list',
            templateUrl: './app/components/item-list/item-list.partial.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ItemListComponent);
    return ItemListComponent;
}());
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=item-list.component.js.map