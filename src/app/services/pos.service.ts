import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PosService {

  itemsURL = 'https://jazzycatcafeapp.firebaseio.com/items.json';
  itemURL = 'https://jazzycatcafeapp.firebaseio.com/items';  

  constructor(private http: Http) {}

  postItems( item: any ) {
    
    const newItem = JSON.stringify(item);
    const headers = new Headers({ 
      'Content-Type': 'application/json'
    });
    
    return this.http.post( this.itemsURL, newItem, {headers}).map( res => {
      console.log(res.json()); 
      return res.json();
    })

  }

  getItems() {
    return this.http.get( this.itemsURL).map( res => res.json() )
  }

  getItem( id$: string ) {
    const url = `${this.itemURL}/${id$}.json`;
    return this.http.get(url).map( res => res.json() )
  }

  putItem( item: any, id$: string ){
    
    const newItem = JSON.stringify(item);
    const headers = new Headers({ 
      'Content-Type': 'application/json'
    });
    
    const url = `${this.itemURL}/${id$}.json`;

    return this.http.put( url, newItem, {headers}).map( res => {
      return res.json();
    })
  }  
    
  delItem( id$: string ) {
    const url = `${this.itemURL}/${id$}.json`;
    return this.http.delete(url).map( res => res.json() )
  }

  /*  */ 

}
