import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from '../../models/item';

@Component ({
    selector: 'item',
    templateUrl: './app/components/item/item.partial.html'
})

export class ItemComponent {
    @Input() item: Item;
    @Output() removeItem = new EventEmitter();

    toggleDone() {
        this.item.done = !this.item.done;
    }

    removeI() {
        this.removeItem.emit(this.item);
    }
}