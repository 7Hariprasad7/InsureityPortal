import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../constants/ApiRoutes';
import { ConsumerProperty } from '../models/consumerProperty';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private _http: HttpClient) { }

  CreateBusinessProperty(bp: any) {
    return this._http.post(ApiRoutes.CreateBusinessProperty, bp);
  }

  viewConsumerProperty(ConsumerId :string,PropertyId:string ):Observable<ConsumerProperty>
  {
    return this._http.get<ConsumerProperty>(ApiRoutes.GetBusinessProperty+"/"+ConsumerId+"/"+PropertyId);
  }


  UpdateBusinessProperty(bp: any) {
    return this._http.put(ApiRoutes.UpdateBusinessProperty, bp);
  }

}
