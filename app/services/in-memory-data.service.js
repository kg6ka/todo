"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var items = [
            { id: 1, title: 'Item 1', done: false },
            { id: 2, title: 'Item 2', done: false },
            { id: 3, title: 'Item 3', done: true }
        ];
        return { items: items };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map