import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// import { items } from '../models/items.model';
import { IItem } from '../models/item';

@Injectable()

export class ItemsService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private Url = 'api/items';
    private handleError(error: any): Promise<any> {
        console.log('Error', error);
        return Promise.reject(error.message || error);
    }

    private post(item: IItem): Promise<IItem> {
        return this.http.post(this.Url, JSON.stringify(item), { headers: this.headers })
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError)
    }

    private delete(item: IItem): Promise<IItem> {
        return this.http.delete(`${this.Url}/${item.id}`, { headers: this.headers })
                        .toPromise()
                        .then(res => item)
                        .catch(this.handleError)
    }

    constructor(private http: Http ) {}

    order: number;

    getItems(): Promise<IItem[]> {
        return this.http.get(this.Url)
                .toPromise()
                .then(res => res.json().data)
                .catch(this.handleError);
        // return new Promise(resolve => setTimeout(() => resolve(items), 1000));
    }

    addItem(item: IItem): Promise<IItem> {
        // items.push(item);
        return this.post(item);
    }

    removeItem(item: IItem): Promise<IItem> {
        // let index = items.indexOf(item);
        // if(index !== -1) items.splice(index, 1);
        return this.delete(item);
    }

}