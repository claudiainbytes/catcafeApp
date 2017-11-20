import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PosService } from '../services/pos.service';

@Component({
  selector: 'ng-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  items: any[] = [];

  orderForm: FormGroup;

  showDropDown = false;

  constructor( private pf: FormBuilder, 
               private posService: PosService ) { 
                
                this.initForm();
                
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

  initForm(): FormGroup {
    return this.orderForm = this.pf.group({
      search: [null]
    })
  }

  selectValue(value) {
    this.orderForm.patchValue({"search": value.name});
    this.showDropDown = false;
  }
   closeDropDown() {
     this.showDropDown = !this.showDropDown;
   }
 
   openDropDown() {
     this.showDropDown = false;
   }
 
   getSearchValue() {
     return this.orderForm.value.search;
   }

}
