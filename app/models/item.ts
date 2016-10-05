export interface IItem {
    id: number;
    title: string;
    done: boolean;
}

export class Item implements IItem{
    id: number;
    title: string;
    done: boolean;

    constructor(title: string) {
        this.title = title;
        this.done = false;
    }
}