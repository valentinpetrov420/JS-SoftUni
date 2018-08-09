import { Component, OnInit } from '@angular/core';
import {FurnitureModel} from '../models/furniture.model';
import {FurnitureService} from '../furniture.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  model: Observable<FurnitureModel>;
  id: string;
  constructor(private furnitureService: FurnitureService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.model = this.furnitureService.getFurnitureDetails(this.id);
  }

}
