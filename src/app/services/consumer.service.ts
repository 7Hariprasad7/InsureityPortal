import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../constants/ApiRoutes'
import { ConsumerBusiness } from '../models/consumerBusiness';

@Injectable({
  providedIn: 'root'
})

export class ConsumerService {

  constructor(private _http: HttpClient) { }

  CreateCustomer(cb: any) {
    return this._http.post(ApiRoutes.CreateCustomerBusiness, cb)
  }

  viewConsumerBusiness(ConsumerId :string,BusinessId:string ):Observable<ConsumerBusiness>
  {
    return this._http.get<ConsumerBusiness>(ApiRoutes.GetCustomerBusiness+"/"+ConsumerId+"/"+BusinessId);
  }

  UpdateConsumerBusiness(consumerBusiness: any) {
    return this._http.put(ApiRoutes.UpdateCustomerBusiness, consumerBusiness)
  }
}

