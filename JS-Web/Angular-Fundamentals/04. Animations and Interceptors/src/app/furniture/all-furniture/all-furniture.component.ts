import { Component, OnInit } from '@angular/core';
import {FurnitureService} from '../furniture.service';
import {FurnitureModel} from '../models/furniture.model';
import {Observable} from 'rxjs/index';
import {AuthService} from '../../authentication/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures: Observable<FurnitureModel[]>;
  pageSize = 3;
  currentPage = 1;

  constructor(private furnitureService: FurnitureService,
              public authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.furnitures = this.furnitureService.getAllFurniture();
    console.log('isAdmin() = ' + this.authService.isAdmin());
  }

  changePage(page): void {
    this.currentPage = page;
  }

  deleteFurniture(id) {
    this.furnitureService.deleteFurniture(id)
      .subscribe(() => {
        this.furnitures = this.furnitureService.getAllFurniture();
      });
  }
}
