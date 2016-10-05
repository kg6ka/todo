import { Component } from '@angular/core';
// import { HTTP_PROVIDERS } from '@angular/http';

import { ItemsService } from '../../services/items.service';

@Component({
    selector: 'todo-app',
    templateUrl: './app/components/main-view/main-view.partial.html',
    providers: [
        ItemsService
    ]
})

export class AppComponent {
    title: string;

    constructor() {
        this.title = 'Angular Items App';
    }
}