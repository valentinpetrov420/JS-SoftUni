import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/index';
import {FurnitureModel} from '../models/furniture.model';
import {FurnitureService} from '../furniture.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  furnitures: Observable<FurnitureModel[]>;
  constructor(private furnitureService: FurnitureService,
              private router: Router) { }

  ngOnInit() {
    this.furnitures = this.furnitureService.getMyFurniture();
  }

  deleteFurniture(id) {
    this.furnitureService.deleteFurniture(id)
      .subscribe(() => {
      this.router.navigate(['furniture/all']);
      });
  }
}
