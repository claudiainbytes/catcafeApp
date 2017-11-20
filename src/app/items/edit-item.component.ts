import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { PosService } from '../services/pos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  @ViewChild('formItem') formItem: NgForm; 
  
  categories: string [] = [ 'Drinks' , 'Bakery' , 'Desserts' ];
  
   item: any;

   id: string;
  
    constructor(private posService: PosService,
                private router: Router,
                private activatedRouter: ActivatedRoute ) {
                 
                  this.activatedRouter.params
                        .subscribe( parametros => {
                            this.id = parametros['id'];
                            this.posService.getItem(this.id)
                                .subscribe( item => this.item = item)
                      })
    }
  
    ngOnInit() {
      this.item = {
        name: '',
        price: '',
        category: ''
      };
    }
  
    updateItem() {
      this.item.name = this.formItem.value.name;
      this.item.price = this.formItem.value.price;
      this.item.category = this.formItem.value.category;
    
      this.posService.putItem( this.item, this.id )
        .subscribe(newItem => {
          this.router.navigate(['/items/list']);
      });

      this.formItem.reset();
      
    }

}
