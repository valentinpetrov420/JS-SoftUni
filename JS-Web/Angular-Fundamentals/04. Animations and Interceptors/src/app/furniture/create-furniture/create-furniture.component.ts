import { Component, OnInit } from '@angular/core';
import {CreateFurnitureModel} from '../models/create-furniture.model';
import {FurnitureService} from '../furniture.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  bindingModel: CreateFurnitureModel;
  constructor(private furnitureService: FurnitureService,
              private router: Router) {
    this.bindingModel = new CreateFurnitureModel('', '', 0, '', 1, '');
  }

  ngOnInit() {
  }

  create() {
    this.furnitureService.createFurniture(this.bindingModel)
      .subscribe(() => {
        this.router.navigate(['furniture/all']);
      });
  }

}
