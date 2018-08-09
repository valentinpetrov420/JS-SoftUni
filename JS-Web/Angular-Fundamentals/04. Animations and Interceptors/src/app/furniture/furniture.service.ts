import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateFurnitureModel} from './models/create-furniture.model';
import {FurnitureModel} from './models/furniture.model';

const createUrl = 'http://localhost:5000/furniture/create';
const myUrl = 'http://localhost:5000/furniture/mine';
const detailsUrl = 'http://localhost:5000/furniture/details/';
const allUrl = 'http://localhost:5000/furniture/all';
const deleteUrl = 'http://localhost:5000/furniture/delete/';
const furnitureById = 'http://localhost:5000/furniture/';
const editUrl = 'http://localhost:5000/furniture/edit/';

@Injectable()
export class FurnitureService {
  constructor(private http: HttpClient) {

  }

  createFurniture(body: CreateFurnitureModel) {
    return this.http.post(createUrl, body);
  }

  getAllFurniture() {
    return this.http.get<FurnitureModel[]>(allUrl);
  }

  getFurnitureDetails(id: string) {
    return this.http.get<FurnitureModel>(detailsUrl + id);
  }

  getMyFurniture() {
    return this.http.get<FurnitureModel[]>(myUrl);
  }

  deleteFurniture(id: string) {
    return this.http.delete<FurnitureModel>(deleteUrl + id);
  }

  getFurnitureById(id: string) {
    return this.http.get<FurnitureModel>(furnitureById + id);
  }

  editFurniture(id: string, body: FurnitureModel) {
    return this.http.put(editUrl + id, body);
  }
}
