import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VeggieItem } from 'src/app/types/veggieItem';

@Injectable({
  providedIn: 'root'
})
export class VeggieService {

  constructor(private http:HttpClient) { }

  getVeggies(language:string):Observable<VeggieItem[]>{
    return this.http.get<VeggieItem[]>('/assets/fakeData/veggieData.'+language+'.json');
  }
}
