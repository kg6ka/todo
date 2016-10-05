import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IItem } from '../../models/item';

@Component ({
    selector: 'item-list',
    templateUrl: './app/components/item-list/item-list.partial.html'
})

export class ItemListComponent {
    @Input() items: IItem[];
    @Output() toggled: EventEmitter<IItem>;
    @Output() remove: EventEmitter<IItem>;

    constructor() {
            this.toggled = new EventEmitter();
            this.remove = new EventEmitter();
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

    onItemToggle(item: IItem): void {
        console.log('onItemToggle', item);
        this.toggled.emit(item);
    }

    onDeleteItem(item: IItem): void {
       console.log('onDeleteItem', item);
        this.remove.emit(item);
    }
}