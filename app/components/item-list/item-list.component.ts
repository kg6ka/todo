import { Component, OnInit } from '@angular/core';

import { IItem } from '../../models/item';

import { ItemsService } from '../../services/items.service';

@Component ({
    selector: 'item-list',
    templateUrl: './app/components/item-list/item-list.partial.html'
})

export class ItemListComponent implements OnInit {
    items: IItem[];

    constructor(
            private ItemsService: ItemsService
        ) {
            this.items = [];
        }

    ngOnInit() {
        this.ItemsService.getItems()
            .then(res => this.items = res);
    }

    get sortItems() {
        return this.items
            .map(item => {
                return item;
            })
            .sort((a, b) => {
                if(a.title > b.title) return 1;
                return -1;
            })
            .sort((a, b) => {
                if(a.done && !b.done) return 1;
                return -1;
        });
    }

    onRemoveItem(item: IItem): void {
        this.ItemsService.removeItem(item).then(item => console.log(item));
    }
}