import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoints } from '../endpoint/enpoint.component';
import { ServiceDto } from '../dto/serviceDTO';

@Injectable({
  providedIn: 'root'
})
export class IconBarService {

  endpoint: EndPoints= new EndPoints;
  public serviceDto: ServiceDto[] = [];

  constructor(private http:HttpClient) { }

  public getServices(){

    return this.http.get<ServiceDto[]>(this.endpoint.endPointService);


  }
}
