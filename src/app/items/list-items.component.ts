import { Component, OnInit, ViewChild } from '@angular/core';
import { PosService} from '../services/pos.service';

@Component({
  selector: 'ng-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: any[] = [];

  constructor( private posService: PosService ) { 
    this.posService.getItems()
      .subscribe( items => {
          for( const id$ in items ){
              const i = items[id$];
              i.id$ = id$;
              this.items.push(items[id$]);
          }
      })
  }

  ngOnInit() {
  }

  deleteItem(id$) {
    this.posService.delItem(id$)
      .subscribe( res => {
        this.items = [];
        this.posService.getItems()
          .subscribe(items => {
            for ( const id$ in items) {
              const i = items[id$];
              i.id$ = id$;
              this.items.push(items[id$]);
            }
          })
      });
  }

}
