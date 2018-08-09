import { NgModule } from '@angular/core';
import {furnitureComponents} from './index';
import {FormsModule} from '@angular/forms';
import {FurnitureService} from './furniture.service';
import {RouterModule} from '@angular/router';
import {FurnitureRoutingModule} from './furniture-routing.module';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    ...furnitureComponents,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FurnitureRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    FurnitureService
  ],
  exports: [
    CommonModule
  ]
})

export class FurnitureModule { }
