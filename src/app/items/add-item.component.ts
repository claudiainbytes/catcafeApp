import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { PosService} from '../services/pos.service';

@Component({
  selector: 'ng-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @ViewChild('formItem') formItem: NgForm; 

  categories: string [] = [ 'Drinks' , 'Bakery' , 'Desserts' ];

  item: any;

  constructor(private posService: PosService) {
    this.item = {
      name: '',
      price: '',
      category: ''
    }
  }

  ngOnInit() {
  }

  addItem() {
    this.item.name = this.formItem.value.name;
    this.item.price = this.formItem.value.price;
    this.item.category = this.formItem.value.category;
  
    this.posService.postItems( this.item )
      .subscribe( newItem => {} )
    
    this.formItem.reset();  
    
  }

}
