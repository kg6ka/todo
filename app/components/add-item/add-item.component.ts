import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';
import { ItemsService } from '../../services/items.service';

@Component ({
    selector: 'add-item',
    templateUrl: './app/components/add-item/add-item.partial.html'
})

export class AddItemComponent {
    // @Output() createItem = new EventEmitter();

    constructor(
        private ItemsService: ItemsService
    ) {}

    addI(input: any) {
        let titleItem = input.value;
        if(titleItem) this.ItemsService.addItem(new Item(titleItem))
            .then(item => console.log(item));
        // if(titleItem) this.createItem.emit(new Item(titleItem));
        input.value = '';
        return;
    }

    // addItem(input: any) {
    //     let titleItem = input.value;
    //
    //     if(titleItem) this.todos.push(new Item(input.value)); //second way is titleItem
    //     console.log(this.todos);
    //     input.value = '';
    //     return;
    // }

    /*Use for ngForm*/
    // addItem(title) {
    //     if(!title) return;
    //     this.todos.push(title);
    //     this.itemName = '';
    // }
}