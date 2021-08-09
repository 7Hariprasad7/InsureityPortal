import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ApiRoutes } from '../constants/ApiRoutes';
import { ConsumerPolicy } from '../models/consumerPolicy';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private _http: HttpClient) { }

  createPolicy(cp: any)
  {const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8'}),responseType: 'text' as 'text'};
    return this._http.post(ApiRoutes.CreatePolicy,cp, httpOptions);
  }

  issuePolicy(ip:any)
  {const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8'}),responseType: 'text' as 'text'};
    return this._http.post(ApiRoutes.IssuePolicy,ip,httpOptions)
  }

  viewPolicy(ConsumerId :string,PolicyId:string ):Observable<ConsumerPolicy>
  {
    return this._http.get<ConsumerPolicy>(ApiRoutes.GetPolicy+"/" +ConsumerId+"/"+PolicyId);
  }

  getQuotes(pValue:string,bValue:string,pType:string)
  {
    return this._http.get(ApiRoutes.GetQuotes+'/'+pValue+'/'+bValue+'/'+pType)
  }
}
