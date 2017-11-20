import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PosService } from './services/pos.service';

import { PesoPipe } from './custompipes/peso.pipe';
import { SearchFilterPipe } from './custompipes/search-filter.pipe';
import { LetterBoldPipe } from './custompipes/letter-bold.pipe';

import { AppComponent } from './app.component';
import { AddItemComponent } from './items/add-item.component';
import { ListItemsComponent } from './items/list-items.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { EditItemComponent } from './items/edit-item.component';
import { AddOrderComponent } from './order/add-order.component';
import { ClickOutsideDirective } from './customdirectives/click-outside.directive';

const routes: Routes = [
  { path: 'items/add',  component: AddItemComponent },
  { path: 'items/list', component: ListItemsComponent },
  { path: 'items/edit/:id', component: EditItemComponent },
  { path: 'orders/add', component: AddOrderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    TopNavBarComponent,
    LeftNavBarComponent,
    ListItemsComponent,
    PesoPipe,
    EditItemComponent,
    AddOrderComponent,
    SearchFilterPipe,
    LetterBoldPipe,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ PosService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
