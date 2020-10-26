import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import { Jewellery} from './jewellery.model';

@Injectable({
  providedIn: 'root'
})
export class JewelleryService {
  selectedJewellery : Jewellery;
  jewellery : Jewellery[]; 
  readonly baseUrl ="http://localhost:3000/jewellery";

  constructor(private http : HttpClient) { }

  postJewellery(jewelleryemp: Jewellery){
    return this.http.post(this.baseUrl,jewelleryemp);
  }

  getJewelleryList(){
    return this.http.get(this.baseUrl);
  }
  putJewellery(jewelleryemp:Jewellery){
    return this.http.put(this.baseUrl +  `/${jewelleryemp._id}`,jewelleryemp);
  }

  deleteJewellery(_id:string){
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
}
