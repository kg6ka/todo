import { Component } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './app/components/header/header.partial.html'
})

export class HeaderComponent {
    logo: string;

    constructor() {
        this.logo = 'Todo App';
    }
}
